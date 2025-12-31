import { Language } from '@/app/shared/types/types';
import { vi } from '@/app/shared/locales/vi';
import { en } from '@/app/shared/locales/en';
import { ja } from '@/app/shared/locales/ja';

export const translations = {
  vi,
  en,
  ja
};

export const getTranslation = (lang: Language) => translations[lang];