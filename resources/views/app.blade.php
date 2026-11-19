<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        @php
            try {
                $settings = isset($page['props']['siteSettings'])
                    ? (object) $page['props']['siteSettings']
                    : (\App\Models\SiteSetting::first() ?: \App\Helpers\SeedData::getSiteSettings());
            } catch (\Throwable $e) {
                $settings = \App\Helpers\SeedData::getSiteSettings();
            }
            $seoMeta = \App\Helpers\SeoResolver::resolve($page ?? []);
            $gaId = $settings->google_analytics ?? null;
            $rawGtmId = trim((string) ($settings->google_tag_manager ?? ''));
            $gtmId = ($rawGtmId !== '' && $rawGtmId !== 'GTM-XXXXXXX') ? $rawGtmId : 'GTM-W8QBG2XZ';
            $pixelId = $settings->meta_pixels ?? null;
            $rawGscTag = trim((string) ($settings->google_search_console ?? ''));
            $gscTag = ($rawGscTag !== '' && !str_contains($rawGscTag, '1234567890'))
                ? $rawGscTag
                : '<meta name="google-site-verification" content="mxE9QUV2EQe_-xB0JEapaMjC2zKSjKxAKGtgNyPVwxs" />';
        @endphp

        @if(str_contains($gscTag, '<meta'))
            {!! $gscTag !!}
        @else
            <meta name="google-site-verification" content="{{ trim(str_replace('google-site-verification=', '', $gscTag)) }}" />
        @endif

        <!-- Google tag (gtag.js / GTM) -->
        <script async src="https://www.googletagmanager.com/gtm.js?id={{ $gtmId }}"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          @if($gaId && $gaId !== 'G-1234567890')
          gtag('config', '{{ $gaId }}');
          @endif
        </script>

        <title inertia>{{ $seoMeta['title'] }}</title>
        <meta name="description" inertia="description" content="{{ $seoMeta['description'] }}">
        <meta name="keywords" inertia="keywords" content="{{ $seoMeta['keywords'] }}">
        <meta name="author" inertia="author" content="8vice Advisory">
        <meta name="robots" inertia="robots" content="{{ $seoMeta['robots'] }}">
        <meta name="googlebot" inertia="googlebot" content="{{ $seoMeta['robots'] }}">

        <link rel="canonical" inertia="canonical" href="{{ $seoMeta['canonical'] }}">
        <link rel="alternate" hreflang="en" inertia="hreflang-en" href="{{ $seoMeta['en_url'] }}">
        <link rel="alternate" hreflang="id" inertia="hreflang-id" href="{{ $seoMeta['id_url'] }}">
        <link rel="alternate" hreflang="zh-CN" inertia="hreflang-cn" href="{{ $seoMeta['cn_url'] }}">
        <link rel="alternate" hreflang="x-default" inertia="hreflang-default" href="{{ $seoMeta['en_url'] }}">

        <meta property="og:site_name" inertia="og:site_name" content="8VICE">
        <meta property="og:type" inertia="og:type" content="{{ $seoMeta['og_type'] }}">
        <meta property="og:url" inertia="og:url" content="{{ $seoMeta['current_url'] }}">
        <meta property="og:title" inertia="og:title" content="{{ $seoMeta['title'] }}">
        <meta property="og:description" inertia="og:description" content="{{ $seoMeta['description'] }}">
        <meta property="og:image" inertia="og:image" content="{{ $seoMeta['og_image'] }}">
        <meta property="og:image:secure_url" inertia="og:image:secure_url" content="{{ $seoMeta['og_image'] }}">
        <meta property="og:image:width" inertia="og:image:width" content="1200">
        <meta property="og:image:height" inertia="og:image:height" content="630">
        <meta property="og:image:alt" inertia="og:image:alt" content="{{ $seoMeta['title'] }}">
        <meta property="og:locale" inertia="og:locale" content="{{ $seoMeta['og_locale'] }}">
        <meta property="og:locale:alternate" inertia="og:locale:alternate" content="{{ $seoMeta['og_locale_alt'] }}">

        <meta name="twitter:card" inertia="twitter:card" content="summary_large_image">
        <meta name="twitter:site" inertia="twitter:site" content="{{ $seoMeta['twitter_handle'] }}">
        <meta name="twitter:creator" inertia="twitter:creator" content="{{ $seoMeta['twitter_handle'] }}">
        <meta name="twitter:title" inertia="twitter:title" content="{{ $seoMeta['title'] }}">
        <meta name="twitter:description" inertia="twitter:description" content="{{ $seoMeta['description'] }}">
        <meta name="twitter:image" inertia="twitter:image" content="{{ $seoMeta['og_image'] }}">
        <meta name="twitter:image:alt" inertia="twitter:image:alt" content="{{ $seoMeta['title'] }}">

        @if($settings)
            @if($gaId && $gaId !== 'G-1234567890')
                <script async src="https://www.googletagmanager.com/gtag/js?id={{ $gaId }}"></script>
            @endif
            @if($pixelId && $pixelId !== '123456789012345')
                <script>
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '{{ $pixelId }}');
                fbq('track', 'PageView');
                </script>
            @endif
        @endif

        <!-- Favicon Suite -->
        <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}?v=2" />
        <link rel="shortcut icon" href="{{ asset('favicon.ico') }}?v=2" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" media="print" onload="this.media='all'" />
        <noscript>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" />
        </noscript>

        <link rel="stylesheet" href="{{ asset('css/styles.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/prd-utilities.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/pages.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/m3-motion.css') }}" media="print" onload="this.media='all'" />

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased" oncontextmenu="return false;">
        @inertia
        
        <!-- Anti Inspect Scripts -->
        <script>
            document.onkeydown = function(e) {
                if(e.keyCode == 123) {
                    return false;
                }
                if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                    return false;
                }
                if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
                    return false;
                }
                if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
                    return false;
                }
                if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                    return false;
                }
            }
        </script>
    </body>
</html>
