<?php
namespace App\Filament\Resources\BookReviews\Pages;
use App\Filament\Resources\BookReviews\BookReviewResource;
use Filament\Resources\Pages\CreateRecord;

class CreateBookReview extends CreateRecord
{
    protected static string $resource = BookReviewResource::class;
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}

