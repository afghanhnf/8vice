<?php

namespace App\Filament\Resources\SiteSettings\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;

class SiteSettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Company Information')
                    ->columns(2)
                    ->schema([
                        Textarea::make('address')
                            ->label('Headquarters Address')
                            ->rows(3)
                            ->columnSpanFull(),
                        TextInput::make('email')
                            ->label('Contact Email')
                            ->email()
                            ->maxLength(255),
                        TextInput::make('maps_link')
                            ->label('Google Maps Link')
                            ->url()
                            ->maxLength(1000),
                        Tabs::make('Tagline')
                            ->columnSpanFull()
                            ->tabs([
                                Tabs\Tab::make('EN')->schema([
                                    TextInput::make('tagline.en')->label('[EN] Company Tagline')->placeholder('Strategic Advisory & Cross-Border Execution')->maxLength(255),
                                ]),
                                Tabs\Tab::make('ID')->schema([
                                    TextInput::make('tagline.id')->label('[ID] Company Tagline')->placeholder('Penasihat Strategis & Eksekusi Lintas Batas')->maxLength(255),
                                ]),
                            ]),
                    ]),

                Section::make('Homepage Highlight Stat')
                    ->description('Featured statistic counter shown on the homepage hero banner (e.g. $130B).')
                    ->columns(2)
                    ->schema([
                        TextInput::make('macro_stat_value')
                            ->label('Stat Value')
                            ->placeholder('e.g. $130B')
                            ->maxLength(50),
                        TextInput::make('macro_stat_label')
                            ->label('Stat Label / Caption')
                            ->placeholder('e.g. China-Indonesia cross-border tech & retail opportunity in 2026')
                            ->maxLength(255),
                    ]),

                Section::make('China Communications & Direct Channels')
                    ->description('Direct messaging channels for Chinese enterprise delegations and global clients.')
                    ->columns(2)
                    ->schema([
                        TextInput::make('wechat_id')
                            ->label('WeChat ID / Account')
                            ->placeholder('e.g. EightVice_ID or 8vice_official')
                            ->maxLength(100),
                        FileUpload::make('wechat_qr')
                            ->label('WeChat QR Code Image')
                            ->directory('settings')
                            ->image()
                            ->helperText('QR code scan for instant WeChat connection (auto-converted to WebP).'),
                    ]),

                Section::make('Social Media Links')
                    ->columns(2)
                    ->schema([
                        TextInput::make('whatsapp_url')
                            ->label('WhatsApp URL')
                            ->url()
                            ->maxLength(255),
                        TextInput::make('linkedin_url')
                            ->label('LinkedIn URL')
                            ->url()
                            ->maxLength(255),
                        TextInput::make('instagram_url')
                            ->label('Instagram URL')
                            ->url()
                            ->maxLength(255),
                        TextInput::make('youtube_url')
                            ->label('YouTube URL')
                            ->url()
                            ->maxLength(255),
                    ]),

                Section::make('Global SEO & Social Fallbacks')
                    ->description('Default meta information used when specific pages or dynamic posts do not have custom meta tags.')
                    ->columns(1)
                    ->schema([
                        Tabs::make('Default Meta Title')
                            ->tabs([
                                Tabs\Tab::make('EN')
                                    ->schema([
                                        TextInput::make('default_meta_title.en')
                                            ->label('[EN] Default Site Title')
                                            ->placeholder('8vice | Indonesia, Decoded for Chinese Businesses & Global Enterprises')
                                            ->maxLength(255),
                                    ]),
                                Tabs\Tab::make('ID')
                                    ->schema([
                                        TextInput::make('default_meta_title.id')
                                            ->label('[ID] Default Site Title')
                                            ->placeholder('8vice | Solusi Strategis & Konsultasi Bisnis Global di Indonesia')
                                            ->maxLength(255),
                                    ]),
                            ])->columnSpanFull(),

                        Tabs::make('Default Meta Description')
                            ->tabs([
                                Tabs\Tab::make('EN')
                                    ->schema([
                                        Textarea::make('default_meta_description.en')
                                            ->label('[EN] Default Meta Description')
                                            ->rows(3)
                                            ->placeholder('Default summary for Google search snippets...')
                                            ->maxLength(500),
                                    ]),
                                Tabs\Tab::make('ID')
                                    ->schema([
                                        Textarea::make('default_meta_description.id')
                                            ->label('[ID] Default Meta Description')
                                            ->rows(3)
                                            ->placeholder('Ringkasan default untuk pencarian Google...')
                                            ->maxLength(500),
                                    ]),
                            ])->columnSpanFull(),

                        TextInput::make('site_keywords')
                            ->label('Global Keywords (Comma-separated)')
                            ->placeholder('indonesia market entry, business consulting jakarta, corporate strategy')
                            ->maxLength(500),

                        FileUpload::make('default_og_image')
                            ->label('Global Default OG Social Share Image (1200x630 px)')
                            ->directory('seo')
                            ->image()
                            ->helperText('Fallback banner used when sharing any page or dynamic article without an explicit image.')
                            ->columnSpanFull(),

                        TextInput::make('twitter_handle')
                            ->label('Official X / Twitter Handle')
                            ->placeholder('@8vice')
                            ->maxLength(100),
                    ]),

                Section::make('Legal & Compliance Policies')
                    ->description('Legal agreements and disclosures.')
                    ->collapsible()
                    ->collapsed()
                    ->schema([
                        Tabs::make('Privacy Policy')
                            ->tabs([
                                Tabs\Tab::make('EN')->schema([
                                    RichEditor::make('privacy_policy.en')->label('[EN] Privacy Policy Content'),
                                ]),
                                Tabs\Tab::make('ID')->schema([
                                    RichEditor::make('privacy_policy.id')->label('[ID] Kebijakan Privasi'),
                                ]),
                            ]),
                        Tabs::make('Terms of Service')
                            ->tabs([
                                Tabs\Tab::make('EN')->schema([
                                    RichEditor::make('terms_of_service.en')->label('[EN] Terms of Service Content'),
                                ]),
                                Tabs\Tab::make('ID')->schema([
                                    RichEditor::make('terms_of_service.id')->label('[ID] Syarat & Ketentuan Layanan'),
                                ]),
                            ]),
                    ]),

                Section::make('Analytics & Tracking')
                    ->columns(2)
                    ->schema([
                        TextInput::make('google_analytics')
                            ->label('Google Analytics Measurement ID')
                            ->placeholder('e.g., G-XXXXXXXXXX')
                            ->maxLength(255),
                        TextInput::make('google_search_console')
                            ->label('Google Search Console HTML Tag')
                            ->placeholder('e.g., <meta name="google-site-verification" content="..." />')
                            ->maxLength(255),
                        TextInput::make('google_tag_manager')
                            ->label('Google Tag Manager ID')
                            ->placeholder('e.g., GTM-XXXXXXX')
                            ->maxLength(255),
                        TextInput::make('meta_pixels')
                            ->label('Meta Pixel ID')
                            ->placeholder('e.g., 123456789012345')
                            ->maxLength(255),
                    ]),
            ]);
    }
}
