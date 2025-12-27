export type Language = 'en' | 'es';

export const languages: Language[] = ['en', 'es'];
export const defaultLang: Language = 'en';

/**
 * Get language from URL path
 * '/' -> 'en'
 * '/es' -> 'es'
 * '/es/mindstudio' -> 'es'
 * '/mindstudio' -> 'en'
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  return 'en';
}

/**
 * Get localized path
 * getLocalizedPath('/mindstudio', 'es') -> '/es/mindstudio'
 * getLocalizedPath('/es/mindstudio', 'en') -> '/mindstudio'
 */
export function getLocalizedPath(path: string, lang: Language): string {
  // Remove any existing language prefix
  const cleanPath = path.replace(/^\/(en|es)/, '') || '/';

  if (lang === 'en') {
    return cleanPath;
  }

  return `/es${cleanPath === '/' ? '' : cleanPath}`;
}

/**
 * Get alternate language
 */
export function getAlternateLang(lang: Language): Language {
  return lang === 'en' ? 'es' : 'en';
}

/**
 * Get all static paths for a page (both languages)
 */
export function getLanguageStaticPaths() {
  return languages.map((lang) => ({
    params: { lang: lang === 'en' ? undefined : lang },
    props: { lang }
  }));
}
