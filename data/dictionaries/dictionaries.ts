import { cache } from 'react';
import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  gr: () => import('./gr.json').then((module) => module.default),
};

type Dictionary = typeof dictionaries;

type Locale = keyof Dictionary;

export const getDictionary = cache(async (locale: Locale) => await dictionaries[locale]());
