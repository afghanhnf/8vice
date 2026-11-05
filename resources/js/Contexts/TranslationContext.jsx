import React, { createContext, useContext, useEffect, useState } from 'react';
import { router } from '@inertiajs/react';
import en from '../lang/en.json';
import id from '../lang/id.json';
import cn from '../lang/cn.json';

const translations = {
  en,
  id,
  cn
};

const TranslationContext = createContext();

function detectPathnameLang() {
  if (typeof window !== 'undefined') {
    const p = window.location.pathname;
    if (p === '/id' || p.startsWith('/id/')) return 'id';
    if (p === '/cn' || p.startsWith('/cn/')) return 'cn';
  }
  return 'en';
}

export function TranslationProvider({ children }) {
  const [lang, setLang] = useState(detectPathnameLang);

  useEffect(() => {
    const removeListener = router.on('navigate', () => {
      setLang(detectPathnameLang());
    });
    return removeListener;
  }, []);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        // Fallback to English if key is missing in the selected language
        let fallbackValue = translations['en'];
        for (const fk of keys) {
          if (fallbackValue && fallbackValue[fk] !== undefined) {
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

  const tr = (enText, idText, cnText) => {
    if (lang === 'cn' && cnText !== undefined) return cnText;
    if (lang === 'id' && idText !== undefined) return idText;
    return enText;
  };

  return (
    <TranslationContext.Provider
      value={{
        lang,
        locale: lang,
        isEn: lang === 'en',
        isId: lang === 'id',
        isCn: lang === 'cn',
        t,
        tr
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
