export const defaultLocale = 'en';
export const locales = ['en', 'zh'] as const;
export type ValidLocale = typeof locales[number];

interface LocaleConfig {
  name: string;
  flag: string;
}

export const localeConfig: Record<ValidLocale, LocaleConfig> = {
  en: {
    name: 'English',
    flag: '🇺🇸',
  },
  zh: {
    name: '中文',
    flag: '🇨🇳',
  },
}; 