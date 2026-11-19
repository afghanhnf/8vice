import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { TranslationProvider, detectPathnameLang, preloadTranslation } from '@/Contexts/TranslationContext';
import { registerWebMcpTools } from '@/utils/webmcp';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

router.on('invalid', (event) => {
    event.preventDefault();
    window.location.href = event.detail.response.url;
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
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
