<?php
namespace App\Filament\Resources\BookReviews\Pages;
use App\Filament\Resources\BookReviews\BookReviewResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditBookReview extends EditRecord
{
    protected static string $resource = BookReviewResource::class;
    protected function getHeaderActions(): array
    {
        return [DeleteAction::make()];
    }
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}

