@php
    use Filament\Support\Enums\Width;

    $livewire ??= null;
    $renderHookScopes = $livewire?->getRenderHookScopes();
@endphp

<x-filament-panels::layout.base :livewire="$livewire">
    <div class="vice-login-split">
        {{-- LEFT PANEL: Branded image with red/dark overlay --}}
        <div class="vice-login-left">
            <div class="vice-login-left__overlay"></div>
            <img
                src="{{ asset('images/consultancy_hero.webp') }}"
                alt="8VICE"
                class="vice-login-left__image"
            />
            <div class="vice-login-left__content">
                <div class="vice-login-left__logo-text">8VICE</div>
                <h1 class="vice-login-left__heading">
                    Welcome to<br/>8vice
                </h1>
                <p class="vice-login-left__description">
                    Empowering your business with strategic advisory, comprehensive intelligence, and targeted solutions.
                </p>
                <div class="vice-login-left__footer">
                    &copy; {{ date('Y') }} 8vice. All rights reserved.
                </div>
            </div>
        </div>

        {{-- RIGHT PANEL: Login form --}}
        <div class="vice-login-right">
            <div class="vice-login-right__inner">
                {{-- Logo --}}
                <div class="vice-login-right__logo">
                    <span class="vice-login-right__logo-text">8VICE</span>
                </div>

                {{-- Heading --}}
                <div class="vice-login-right__header">
                    <h2 class="vice-login-right__heading">Sign In</h2>
                    <p class="vice-login-right__subheading">Enter your credentials to access the admin panel</p>
                </div>

                {{-- Filament page content (slot) --}}
                <div class="vice-login-right__form">
                    {{ $slot }}
                </div>
            </div>
        </div>
    </div>

    {{ \Filament\Support\Facades\FilamentView::renderHook(\Filament\View\PanelsRenderHook::FOOTER, scopes: $renderHookScopes) }}
</x-filament-panels::layout.base>
