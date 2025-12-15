import { ui, defaultLang } from './ui';

// Extracts the language code from the given URL's pathname.
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// Returns a translation function for the specified language.
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

// Returns a localized path by prefixing it with the language code.
export function getLocalizedPath(path: string, lang: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${normalizedPath}`;
}