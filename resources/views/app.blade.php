<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />

        @php
            $settings = \App\Models\SiteSetting::first();
        @endphp

        @if($settings)
            @if($settings->google_analytics)
                <script async src="https://www.googletagmanager.com/gtag/js?id={{ $settings->google_analytics }}"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '{{ $settings->google_analytics }}');
                </script>
            @endif
            @if($settings->google_tag_manager)
                <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','{{ $settings->google_tag_manager }}');</script>
            @endif
            @if($settings->meta_pixels)
                <script>
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '{{ $settings->meta_pixels }}');
                fbq('track', 'PageView');
                </script>
            @endif
            @if($settings->google_search_console)
                {!! $settings->google_search_console !!}
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

        <!-- Google Material Symbols & Material 3 (M3) -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <link rel="stylesheet" href="{{ asset('css/styles.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/prd-utilities.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/pages.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/m3-motion.css') }}" />

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
