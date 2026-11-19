import React, { createContext, useContext, useEffect, useState } from 'react';
import { router } from '@inertiajs/react';

const TranslationContext = createContext();
const loadedDictionaries = {};

const loaders = {
  en: () => import('../lang/en.json').then((m) => m.default || m),
  id: () => import('../lang/id.json').then((m) => m.default || m),
  cn: () => import('../lang/cn.json').then((m) => m.default || m),
};

export function detectPathnameLang() {
  if (typeof window !== 'undefined') {
    const p = window.location.pathname;
    if (p === '/id' || p.startsWith('/id/')) return 'id';
    if (p === '/cn' || p.startsWith('/cn/')) return 'cn';
  }
  return 'en';
}

export async function preloadTranslation(locale) {
  const code = ['en', 'id', 'cn'].includes(locale) ? locale : 'en';
  if (!loadedDictionaries[code]) {
    loadedDictionaries[code] = await loaders[code]();
  }
  return loadedDictionaries[code];
}

export function TranslationProvider({ children, initialLang, initialDict }) {
  const [lang, setLang] = useState(() => initialLang || detectPathnameLang());
  const [dictVersion, setDictVersion] = useState(0);

  if (initialLang && initialDict && !loadedDictionaries[initialLang]) {
    loadedDictionaries[initialLang] = initialDict;
  }

  useEffect(() => {
    const syncLang = async () => {
      const next = detectPathnameLang();
      if (!loadedDictionaries[next]) {
        await preloadTranslation(next);
        setDictVersion((v) => v + 1);
      }
      setLang(next);
    };

    if (!loadedDictionaries[lang]) {
      preloadTranslation(lang).then(() => setDictVersion((v) => v + 1));
    }

    const removeListener = router.on('navigate', syncLang);
    return removeListener;
  }, [lang]);

  const t = (key) => {
    const keys = key.split('.');
    let value = loadedDictionaries[lang];
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        let fallbackValue = loadedDictionaries['en'];
        for (const fk of keys) {
          if (fallbackValue && fallbackValue[fk] !== undefined) {
            fallbackValue = fallbackValue[fk];
          } else {
            return key;
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
        dictVersion,
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
