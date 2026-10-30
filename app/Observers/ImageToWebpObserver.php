<?php

namespace App\Observers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class ImageToWebpObserver
{
    public function saving(Model $model)
    {
        $columns = [
            'image', 'cover', 'icon', 'logo', 'favicon',
            'detail_image', 'wechat_qr', 'hero_image', 'default_og_image', 'og_image'
        ];
        
        foreach ($columns as $column) {
            if ($model->isDirty($column)) {
                $path = $model->getAttribute($column);
                if ($path && is_string($path) && preg_match('/\.(jpg|jpeg|png)$/i', $path)) {
                    $disk = Storage::disk('public');
                    if ($disk->exists($path)) {
                        $fullPath = $disk->path($path);
                        $newPath = preg_replace('/\.(jpg|jpeg|png)$/i', '.webp', $path);
                        $newFullPath = $disk->path($newPath);
                        
                        // Convert to Webp
                        $content = @file_get_contents($fullPath);
                        if ($content) {
                            $img = @imagecreatefromstring($content);
                            if ($img) {
                                imagepalettetotruecolor($img);
                                imagealphablending($img, true);
                                imagesavealpha($img, true);
                                imagewebp($img, $newFullPath, 90);
                                imagedestroy($img);
                                
                                // Update model attribute to new path
                                $model->setAttribute($column, $newPath);
                                // Delete original
                                @unlink($fullPath);
                            }
                        }
                    }
                }
            }
        }
    }
}
