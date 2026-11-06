<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', '8vice') }}</title>

        @php
            $settings = isset($page['props']['siteSettings'])
                ? (object) $page['props']['siteSettings']
                : \App\Models\SiteSetting::first();
            $gaId = $settings->google_analytics ?? null;
            $gtmId = $settings->google_tag_manager ?? null;
            $pixelId = $settings->meta_pixels ?? null;
            $gscTag = $settings->google_search_console ?? null;
        @endphp

        @if($settings)
            @if($gaId && $gaId !== 'G-1234567890')
                <script async src="https://www.googletagmanager.com/gtag/js?id={{ $gaId }}"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '{{ $gaId }}');
                </script>
            @endif
            @if($gtmId && $gtmId !== 'GTM-XXXXXXX')
                <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','{{ $gtmId }}');</script>
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
            @if($gscTag && !str_contains($gscTag, '1234567890'))
                {!! $gscTag !!}
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
