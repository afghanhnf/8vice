import React, { createContext, useContext, useEffect, useState } from 'react';
import { router } from '@inertiajs/react';
import en from '../lang/en.json';
import id from '../lang/id.json';

const translations = {
  en,
  id
};

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [lang, setLang] = useState(() => {
      if (typeof window !== 'undefined') {
          return window.location.pathname.startsWith('/id') ? 'id' : 'en';
      }
      return 'en';
  });

  useEffect(() => {
    // Listen for inertia navigations to update language if URL changes
    const removeListener = router.on('navigate', () => {
        const newLang = window.location.pathname.startsWith('/id') ? 'id' : 'en';
        setLang(newLang);
    });
    return removeListener;
  }, []);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English if key is missing in the selected language
        let fallbackValue = translations['en'];
        for (const fk of keys) {
          if (fallbackValue && fallbackValue[fk]) {
            fallbackValue = fallbackValue[fk];
          } else {
            return key; // return key if not found at all
          }
        }
        return fallbackValue;
      }
    }
    return value;
  };

  return (
    <TranslationContext.Provider value={{ lang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
