import { ui, defaultLang } from './ui';

// Site base path without trailing slash ("" at the domain root, "/nuevo" in a subfolder)
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefixes a root-relative path ("/assets/...") with the site base path. */
export function withBase(path: string) {
    return `${basePath}${path}`;
}

/** Removes the site base path from a pathname. */
export function stripBase(pathname: string) {
    return basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) || '/' : pathname;
}

export function getLangFromUrl(url: URL) {
    const [, lang] = stripBase(url.pathname).split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
