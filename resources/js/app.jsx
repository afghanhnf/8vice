import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { TranslationProvider, detectPathnameLang, preloadTranslation } from '@/Contexts/TranslationContext';
import { registerWebMcpTools } from '@/utils/webmcp';

const rawAppName = import.meta.env.VITE_APP_NAME;
const appName = !rawAppName || rawAppName.trim().toLowerCase() === 'laravel' ? '8vice' : rawAppName.trim();

router.on('invalid', (event) => {
    event.preventDefault();
    window.location.href = event.detail.response.url;
});

createInertiaApp({
    title: (title) => {
        const clean = (title || '').trim();
        if (!clean || clean.toLowerCase() === 'laravel') {
            return appName;
        }
        if (/8\s?vice/i.test(clean)) {
            return clean;
        }
        return `${clean} | ${appName}`;
    },
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    async setup({ el, App, props }) {
        const initialLang = detectPathnameLang();
        const isHome = props?.initialPage?.component === 'Home';
        const initialDict = isHome ? null : await preloadTranslation(initialLang);
        if (isHome) {
            preloadTranslation(initialLang);
        }

        const root = createRoot(el);

        root.render(
            <TranslationProvider initialLang={initialLang} initialDict={initialDict}>
                <App {...props} />
            </TranslationProvider>
        );

        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(() => registerWebMcpTools(), { timeout: 1500 });
        } else {
            setTimeout(() => registerWebMcpTools(), 200);
        }
    },
    progress: {
        color: '#D62828',
    },
});
