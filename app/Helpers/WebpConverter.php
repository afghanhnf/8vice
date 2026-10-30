<?php
namespace App\Helpers;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class WebpConverter
{
    /**
     * Convert any uploaded raster image (jpg, jpeg, png, bmp, gif) to .webp
     * Preserves transparency and optimizes compression.
     */
    public static function convertAndStore($file, string $directory = 'uploads', string $disk = 'public', int $quality = 88): string
    {
        $realPath = method_exists($file, 'getRealPath') ? $file->getRealPath() : (string) $file;
        $extension = method_exists($file, 'getClientOriginalExtension') ? strtolower($file->getClientOriginalExtension()) : pathinfo($realPath, PATHINFO_EXTENSION);
        $mime = method_exists($file, 'getMimeType') ? $file->getMimeType() : (is_file($realPath) ? mime_content_type($realPath) : '');

        // If already webp or vector svg or non-image, store directly
        if ($extension === 'webp' || $mime === 'image/webp' || $extension === 'svg' || $mime === 'image/svg+xml') {
            if (method_exists($file, 'store')) {
                return $file->store($directory, $disk);
            }
        }

        $image = null;
        if (str_contains($mime, 'jpeg') || str_contains($mime, 'jpg') || in_array($extension, ['jpg', 'jpeg'])) {
            $image = @imagecreatefromjpeg($realPath);
        } elseif (str_contains($mime, 'png') || $extension === 'png') {
            $image = @imagecreatefrompng($realPath);
            if ($image) {
                imagepalettetotruecolor($image);
                imagealphablending($image, true);
                imagesavealpha($image, true);
            }
        } elseif (str_contains($mime, 'bmp') || $extension === 'bmp') {
            $image = @imagecreatefrombmp($realPath);
        } elseif (str_contains($mime, 'gif') || $extension === 'gif') {
            $image = @imagecreatefromgif($realPath);
        }

        if (!$image) {
            if (method_exists($file, 'store')) {
                return $file->store($directory, $disk);
            }
            $targetPath = trim($directory, '/') . '/' . Str::random(40) . '.' . ($extension ?: 'jpg');
            Storage::disk($disk)->put($targetPath, file_get_contents($realPath));
            return $targetPath;
        }

        $filename = Str::random(40) . '.webp';
        $targetRelativePath = trim($directory, '/') . '/' . $filename;
        $tempPath = tempnam(sys_get_temp_dir(), 'webp_');

        imagewebp($image, $tempPath, $quality);
        imagedestroy($image);

        Storage::disk($disk)->put($targetRelativePath, file_get_contents($tempPath));
        @unlink($tempPath);

        return $targetRelativePath;
    }
}

