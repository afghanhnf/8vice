<?php

namespace App\Filament\Resources\PageContents\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Repeater;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;

class PageContentForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1)
            ->components([
                Section::make('Page Identity')
                    ->columnSpanFull()
                    ->columns(2)
                    ->schema([
                        TextInput::make('page_name')
                            ->label('Page Name')
                            ->required()
                            ->maxLength(150),
                        TextInput::make('page_code')
                            ->label('Page Code')
                            ->required()
                            ->disabled(fn ($record) => $record !== null)
                            ->helperText('System page identifier: about, home, services, insights, contact')
                            ->maxLength(80),
                    ]),

                Tabs::make('Language Content')
                    ->columnSpanFull()
                    ->tabs([
                        Tabs\Tab::make('English (EN)')->schema(fn ($record) => self::fieldsForPage($record?->page_code ?? 'about', 'en')),
                        Tabs\Tab::make('Indonesian (ID)')->schema(fn ($record) => self::fieldsForPage($record?->page_code ?? 'about', 'id')),
                        Tabs\Tab::make('Mandarin (CN)')->schema(fn ($record) => self::fieldsForPage($record?->page_code ?? 'about', 'cn')),
                    ]),
            ]);
    }

    protected static function fieldsForPage(string $code, string $lang): array
    {
        return match ($code) {
            'about' => self::aboutFields($lang),
            'home' => self::homeFields($lang),
            'services' => self::servicesFields($lang),
            'insights' => self::insightsFields($lang),
            'contact' => self::contactFields($lang),
            default => self::aboutFields($lang),
        };
    }

    protected static function aboutFields(string $l): array
    {
        return [
            Section::make('01 · Hero & Founding Mandate')
                ->columns(2)
                ->collapsible()
                ->schema([
                    TextInput::make("content.{$l}.eyebrow")->label('Hero Eyebrow')->columnSpanFull(),
                    TextInput::make("content.{$l}.heroTitleLine1")->label('Hero Title Line 1'),
                    TextInput::make("content.{$l}.heroTitleLine2")->label('Hero Title Line 2'),
                    Textarea::make("content.{$l}.heroSubtitle")->label('Hero Subtitle')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.heroBannerBadge")->label('Banner Badge')->columnSpanFull(),
                    Textarea::make("content.{$l}.heroBannerQuote")->label('Banner Quote Statement')->rows(2)->columnSpanFull(),
                    Textarea::make("content.{$l}.heroBannerSub")->label('Banner Supporting Text')->rows(2)->columnSpanFull(),
                ]),

            Section::make('02 · Our Background & Three Foundations')
                ->columns(2)
                ->collapsible()
                ->collapsed()
                ->schema([
                    TextInput::make("content.{$l}.overviewEyebrow")->label('Section Eyebrow')->columnSpanFull(),
                    TextInput::make("content.{$l}.overviewTitle")->label('Section Title')->columnSpanFull(),
                    Textarea::make("content.{$l}.overviewLead")->label('Lead Paragraph')->rows(2)->columnSpanFull(),
                    Textarea::make("content.{$l}.overviewP1")->label('Paragraph 1')->rows(2)->columnSpanFull(),
                    Textarea::make("content.{$l}.overviewP2")->label('Paragraph 2')->rows(2)->columnSpanFull(),
                    Textarea::make("content.{$l}.overviewQuote")->label('Highlight Quote')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.foundationsHeader")->label('Foundations Heading')->columnSpanFull(),
                    Textarea::make("content.{$l}.foundationsSub")->label('Foundations Subtitle')->rows(2)->columnSpanFull(),
                    Repeater::make("content.{$l}.foundations")
                        ->label('3 Foundations Cards')
                        ->columnSpanFull()
                        ->schema([
                            TextInput::make('num')->label('Number')->maxLength(10),
                            TextInput::make('tag')->label('Tag'),
                            TextInput::make('title')->label('Title')->required(),
                            Textarea::make('desc')->label('Description')->rows(2)->required(),
                        ])
                        ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                        ->collapsible(),
                ]),

            Section::make('02B · Who We Are & 4 Pillars')
                ->columns(1)
                ->collapsible()
                ->collapsed()
                ->schema([
                    TextInput::make("content.{$l}.who.eyebrow")->label('Who We Are Eyebrow'),
                    Textarea::make("content.{$l}.who.lead")->label('Who We Are Lead')->rows(2),
                    Textarea::make("content.{$l}.who.desc")->label('Who We Are Description')->rows(3),
                    Repeater::make("content.{$l}.who.pillars")
                        ->label('4 Positioning Pillars')
                        ->schema([
                            TextInput::make('title')->label('Pillar Title')->required(),
                            Textarea::make('desc')->label('Description')->rows(2)->required(),
                        ])
                        ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                        ->collapsible(),
                ]),

            Section::make('03 · Vision & Mission')
                ->columns(2)
                ->collapsible()
                ->collapsed()
                ->schema([
                    TextInput::make("content.{$l}.vmEyebrow")->label('Eyebrow'),
                    TextInput::make("content.{$l}.vmHeading")->label('Section Heading'),
                    Textarea::make("content.{$l}.vmSubheading")->label('Subheading')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.visionBadge")->label('Vision Badge'),
                    TextInput::make("content.{$l}.visionTitle")->label('Vision Title'),
                    Textarea::make("content.{$l}.visionText")->label('Vision Statement')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.missionBadge")->label('Mission Badge')->columnSpanFull(),
                    Repeater::make("content.{$l}.missions")
                        ->label('5 Mission Pillars')
                        ->columnSpanFull()
                        ->schema([
                            TextInput::make('code')->label('Code')->maxLength(10),
                            TextInput::make('title')->label('Title')->required(),
                            TextInput::make('enTitle')->label('Secondary Title'),
                            Textarea::make('desc')->label('Description')->rows(2)->required(),
                        ])
                        ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                        ->collapsible(),
                ]),

            Section::make('03B · Cross-Border Process (5 Steps)')
                ->columns(1)
                ->collapsible()
                ->collapsed()
                ->schema([
                    TextInput::make("content.{$l}.crossBorderProcess.title")->label('Process Section Title'),
                    Repeater::make("content.{$l}.crossBorderProcess.steps")
                        ->label('Process Steps')
                        ->schema([
                            TextInput::make('num')->label('Number')->maxLength(10),
                            TextInput::make('name')->label('Step Name')->required(),
                            Textarea::make('desc')->label('Description')->rows(2)->required(),
                        ])
                        ->itemLabel(fn (array $state): ?string => $state['name'] ?? null)
                        ->collapsible(),
                ]),

            Section::make('04 · Leadership Perspective & 6 Core Domains')
                ->columns(2)
                ->collapsible()
                ->collapsed()
                ->schema([
                    TextInput::make("content.{$l}.leadEyebrow")->label('Eyebrow'),
                    TextInput::make("content.{$l}.leadTitle")->label('Section Title'),
                    Textarea::make("content.{$l}.leadSubtitle")->label('Subtitle')->rows(2)->columnSpanFull(),
                    Textarea::make("content.{$l}.leadP1")->label('Paragraph 1')->rows(2)->columnSpanFull(),
                    Textarea::make("content.{$l}.leadP2")->label('Paragraph 2')->rows(2)->columnSpanFull(),
                    Textarea::make("content.{$l}.leadP3")->label('Paragraph 3')->rows(2)->columnSpanFull(),
                    Textarea::make("content.{$l}.leadQuote")->label('Leadership Quote')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.leadDomainsTitle")->label('Domains Heading')->columnSpanFull(),
                    Repeater::make("content.{$l}.leadDomains")
                        ->label('Leadership & Advisory Domains')
                        ->columnSpanFull()
                        ->schema([
                            TextInput::make('code')->label('Code')->maxLength(10),
                            TextInput::make('title')->label('Domain Title')->required(),
                            Textarea::make('desc')->label('Description')->rows(2)->required(),
                        ])
                        ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                        ->collapsible(),
                ]),

            Section::make('05 · People Section Headings')
                ->description('Individual leaders (Name, Chinese Name, Job Title, Expertise, Bio, Experiences, Photo) are edited in Company & Leadership → People Behind 8Vice.')
                ->columns(2)
                ->collapsible()
                ->collapsed()
                ->schema([
                    TextInput::make("content.{$l}.peopleEyebrow")->label('People Eyebrow'),
                    TextInput::make("content.{$l}.peopleTitle")->label('People Heading'),
                    Textarea::make("content.{$l}.peopleLead")->label('People Intro Paragraph')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.experiencesHeading")->label('Experiences Column Heading'),
                ]),

            Section::make('06 · Core Values')
                ->columns(2)
                ->collapsible()
                ->collapsed()
                ->schema([
                    TextInput::make("content.{$l}.valuesEyebrow")->label('Values Eyebrow'),
                    TextInput::make("content.{$l}.valuesTitle")->label('Values Heading'),
                    Textarea::make("content.{$l}.valuesLead")->label('Values Lead')->rows(2)->columnSpanFull(),
                    Repeater::make("content.{$l}.values")
                        ->label('Core Values Cards')
                        ->columnSpanFull()
                        ->schema([
                            TextInput::make('num')->label('Number')->maxLength(10),
                            TextInput::make('title')->label('Value Title')->required(),
                            TextInput::make('sub')->label('Subtitle'),
                            Textarea::make('desc')->label('Description')->rows(2)->required(),
                        ])
                        ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                        ->collapsible(),
                ]),

            Section::make('07 · Bottom CTA')
                ->columns(2)
                ->collapsible()
                ->collapsed()
                ->schema([
                    TextInput::make("content.{$l}.ctaEyebrow")->label('CTA Eyebrow'),
                    TextInput::make("content.{$l}.ctaTitle")->label('CTA Headline'),
                    Textarea::make("content.{$l}.ctaDesc")->label('CTA Description')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.ctaPrimary")->label('Primary Button Label'),
                    TextInput::make("content.{$l}.ctaSecondary")->label('Secondary Button Label'),
                ]),
        ];
    }

    protected static function homeFields(string $l): array
    {
        return [
            Section::make('01 · Hero Gateway Banner')
                ->columns(1)
                ->collapsible()
                ->schema([
                    Repeater::make("content.{$l}.gateway_hero.title")
                        ->label('Hero Title Lines (Top Banner)')
                        ->simple(TextInput::make('line')->required())
                        ->defaultItems(3),
                    TextInput::make("content.{$l}.gateway_hero.kicker")->label('Hero Kicker (Uppercase Sub-heading)'),
                    Textarea::make("content.{$l}.gateway_hero.sub")->label('Hero Supporting Sentence')->rows(2),
                ]),

            Section::make('02 · Overview — Who is 8Vice')
                ->columns(2)
                ->collapsible()
                ->collapsed()
                ->schema([
                    TextInput::make("content.{$l}.overview.eyebrow")->label('Eyebrow'),
                    TextInput::make("content.{$l}.overview.title")->label('Title'),
                    Textarea::make("content.{$l}.overview.lead")->label('Lead Paragraph')->rows(2)->columnSpanFull(),
                    Textarea::make("content.{$l}.overview.p1")->label('Paragraph 1')->rows(2)->columnSpanFull(),
                    Textarea::make("content.{$l}.overview.p2")->label('Paragraph 2')->rows(2)->columnSpanFull(),
                    Textarea::make("content.{$l}.overview.p3")->label('Paragraph 3')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.overview.tagline")->label('Tagline Quote'),
                    TextInput::make("content.{$l}.overview.btn_profile")->label('Profile Button Text'),
                    Textarea::make("content.{$l}.overview.subtext")->label('Subtext')->rows(2)->columnSpanFull(),
                ]),

            Section::make('03 · Services & Why 8 Vice Sections')
                ->columns(2)
                ->collapsible()
                ->collapsed()
                ->schema([
                    TextInput::make("content.{$l}.services.eyebrow")->label('Services Eyebrow')->columnSpanFull(),
                    Textarea::make("content.{$l}.services.subtitle")->label('Services Subtitle')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.why.eyebrow")->label('Why 8 Vice Eyebrow'),
                    TextInput::make("content.{$l}.why.intro")->label('Why Intro Line'),
                    Textarea::make("content.{$l}.why.lead")->label('Why Lead Paragraph')->rows(2)->columnSpanFull(),
                    Textarea::make("content.{$l}.why.quote")->label('Why Highlight Quote')->rows(2)->columnSpanFull(),
                    Repeater::make("content.{$l}.why.points")
                        ->label('5 Key Strengths')
                        ->columnSpanFull()
                        ->schema([
                            TextInput::make('num')->label('Number')->maxLength(10),
                            TextInput::make('title')->label('Title')->required(),
                            Textarea::make('desc')->label('Description')->rows(2)->required(),
                        ])
                        ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                        ->collapsible(),
                ]),

            Section::make('04 · Gateway, Credibility & Inquiry Headings')
                ->columns(2)
                ->collapsible()
                ->collapsed()
                ->schema([
                    TextInput::make("content.{$l}.gateway.eyebrow")->label('Gateway Eyebrow'),
                    TextInput::make("content.{$l}.gateway.title")->label('Gateway Title'),
                    Textarea::make("content.{$l}.gateway.desc")->label('Gateway Description')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.gateway.c2i_title")->label('China → Indonesia Heading'),
                    TextInput::make("content.{$l}.gateway.i2c_title")->label('Indonesia → China Heading'),
                    TextInput::make("content.{$l}.credibility.eyebrow")->label('Credibility Eyebrow'),
                    TextInput::make("content.{$l}.credibility.title")->label('Credibility Title'),
                    Textarea::make("content.{$l}.credibility.desc")->label('Credibility Description')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.inquiry.eyebrow")->label('Inquiry Eyebrow'),
                    TextInput::make("content.{$l}.inquiry.title")->label('Inquiry Heading'),
                    Textarea::make("content.{$l}.inquiry.subtitle")->label('Inquiry Subtitle')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.inquiry.submit_btn")->label('Inquiry Submit Button'),
                ]),
        ];
    }

    protected static function servicesFields(string $l): array
    {
        return [
            Section::make('01 · Services Page Hero & Grid Header')
                ->columns(2)
                ->collapsible()
                ->schema([
                    TextInput::make("content.{$l}.eyebrow")->label('Eyebrow')->columnSpanFull(),
                    TextInput::make("content.{$l}.heroTitleLine1")->label('Hero Title Line 1'),
                    TextInput::make("content.{$l}.heroTitleLine2")->label('Hero Title Line 2'),
                    Textarea::make("content.{$l}.heroLead")->label('Hero Lead Paragraph')->rows(3)->columnSpanFull(),
                    TextInput::make("content.{$l}.gridKicker")->label('Grid Kicker'),
                    TextInput::make("content.{$l}.gridTitle")->label('Grid Title'),
                    Textarea::make("content.{$l}.gridLead")->label('Grid Lead')->rows(2)->columnSpanFull(),
                ]),

            Section::make('02 · 5-Stage Strategic Approach & Bottom CTA')
                ->columns(2)
                ->collapsible()
                ->collapsed()
                ->schema([
                    TextInput::make("content.{$l}.approachEyebrow")->label('Approach Eyebrow'),
                    TextInput::make("content.{$l}.approachTitle")->label('Approach Title'),
                    Textarea::make("content.{$l}.approachLead")->label('Approach Lead')->rows(2)->columnSpanFull(),
                    Repeater::make("content.{$l}.approachSteps")
                        ->label('5 Methodology Stages')
                        ->columnSpanFull()
                        ->schema([
                            TextInput::make('num')->label('Number')->maxLength(10),
                            TextInput::make('title')->label('Stage Name')->required(),
                            TextInput::make('sub')->label('Subtitle'),
                            Textarea::make('desc')->label('Description')->rows(2)->required(),
                        ])
                        ->itemLabel(fn (array $state): ?string => $state['title'] ?? null)
                        ->collapsible(),
                    Textarea::make("content.{$l}.approachNote")->label('Methodology Note')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.ctaEyebrow")->label('CTA Eyebrow'),
                    TextInput::make("content.{$l}.ctaTitle")->label('CTA Headline'),
                    Textarea::make("content.{$l}.ctaDesc")->label('CTA Description')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.ctaPrimary")->label('Primary Button Label'),
                    TextInput::make("content.{$l}.ctaSecondary")->label('Secondary Button Label'),
                ]),
        ];
    }

    protected static function insightsFields(string $l): array
    {
        return [
            Section::make('01 · Insights & Partnerships Hero & Hubs')
                ->columns(2)
                ->collapsible()
                ->schema([
                    TextInput::make("content.{$l}.eyebrow")->label('Hero Eyebrow')->columnSpanFull(),
                    TextInput::make("content.{$l}.heroTitle")->label('Hero Title'),
                    TextInput::make("content.{$l}.heroSubtitle")->label('Hero Subtitle'),
                    Textarea::make("content.{$l}.heroLead")->label('Hero Lead')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.ctaRegisterPartner")->label('Register Button Label'),
                    TextInput::make("content.{$l}.ctaExploreInsights")->label('Explore Button Label'),
                    TextInput::make("content.{$l}.dualHubTitle1")->label('Focus 01 Title'),
                    Textarea::make("content.{$l}.dualHubDesc1")->label('Focus 01 Description')->rows(2),
                    TextInput::make("content.{$l}.dualHubTitle2")->label('Focus 02 Title'),
                    Textarea::make("content.{$l}.dualHubDesc2")->label('Focus 02 Description')->rows(2),
                ]),

            Section::make('02 · Articles Stream & Ecosystem Partnerships')
                ->columns(2)
                ->collapsible()
                ->collapsed()
                ->schema([
                    TextInput::make("content.{$l}.pillarsEyebrow")->label('Pillars Eyebrow'),
                    TextInput::make("content.{$l}.pillarsTitle")->label('Pillars Heading'),
                    TextInput::make("content.{$l}.chinaResearchEyebrow")->label('China Research Eyebrow'),
                    TextInput::make("content.{$l}.chinaResearchTitle")->label('China Research Heading'),
                    Textarea::make("content.{$l}.chinaResearchSubtitle")->label('China Research Subtitle')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.streamEyebrow")->label('Articles Stream Eyebrow'),
                    TextInput::make("content.{$l}.streamTitle")->label('Articles Stream Title'),
                    TextInput::make("content.{$l}.partnerEyebrow")->label('Partnership Eyebrow'),
                    TextInput::make("content.{$l}.partnerTitle")->label('Partnership Heading'),
                    TextInput::make("content.{$l}.partnerBoxTitle")->label('Registration Box Title'),
                    Textarea::make("content.{$l}.partnerBoxDesc")->label('Registration Box Description')->rows(2)->columnSpanFull(),
                    TextInput::make("content.{$l}.partnerCta")->label('Submit Button Label'),
                ]),
        ];
    }

    protected static function contactFields(string $l): array
    {
        return [
            Section::make('Contact Page Headings & Labels')
                ->columns(1)
                ->schema([
                    TextInput::make("content.{$l}.eyebrow")->label('Hero Eyebrow'),
                    TextInput::make("content.{$l}.heroTitle")->label('Hero Headline'),
                    Textarea::make("content.{$l}.heroSubtitle")->label('Hero Subtitle')->rows(2),
                    TextInput::make("content.{$l}.officeBadge")->label('Office Card Badge'),
                    TextInput::make("content.{$l}.officeHeading")->label('Office Card Title'),
                    Textarea::make("content.{$l}.officeIntro")->label('Office Card Intro Text')->rows(2),
                    TextInput::make("content.{$l}.formEyebrow")->label('Inquiry Form Eyebrow'),
                    TextInput::make("content.{$l}.formTitle")->label('Inquiry Form Headline'),
                    Textarea::make("content.{$l}.formSubtitle")->label('Inquiry Form Description')->rows(2),
                ]),
        ];
    }
}
