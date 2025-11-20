import { common } from './common';
import { mindstudio } from './case-studies/mindstudio';
import { treez } from './case-studies/treez';
import { wenia } from './case-studies/wenia';
import { nmp } from './case-studies/nmp';
import { klare } from './case-studies/klare';

export const translations = {
  en: {
    ...common.en,
    caseStudies: {
      mindstudio: mindstudio.en,
      treez: treez.en,
      wenia: wenia.en,
      nmp: nmp.en,
      klare: klare.en
    }
  },
  es: {
    ...common.es,
    caseStudies: {
      mindstudio: mindstudio.es,
      treez: treez.es,
      wenia: wenia.es,
      nmp: nmp.es,
      klare: klare.es
    }
  }
};

export type Language = 'en' | 'es';
export type TranslationKey = keyof typeof translations.en;
