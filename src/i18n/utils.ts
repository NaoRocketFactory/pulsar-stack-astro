import { en } from './en';
import { fr } from './fr';

export const languages = {
	en: 'English',
	fr: 'Français',
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'en';

const dictionaries: Record<Locale, typeof en | typeof fr> = { en, fr };

export function getLangFromUrl(url: URL): Locale {
	const [, maybeLocale] = url.pathname.split('/');
	if (maybeLocale in languages) return maybeLocale as Locale;
	return defaultLocale;
}

export function useTranslations(locale: Locale) {
	return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function localizePath(path: string, locale: Locale): string {
	if (locale === defaultLocale) return path;
	return `/${locale}${path === '/' ? '' : path}`;
}
