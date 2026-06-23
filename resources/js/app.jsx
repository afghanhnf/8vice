import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { TranslationProvider } from '@/Contexts/TranslationContext';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Fallback for static HTML exports (like GitHub Pages)
// When Inertia receives an HTML file instead of a JSON response, it triggers an 'invalid' event.
// We intercept this and do a hard navigation to the requested URL instead.
import { router } from '@inertiajs/react';
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
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <TranslationProvider>
                <App {...props} />
            </TranslationProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
