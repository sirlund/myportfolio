import { useLanguage } from '@/contexts';
import { translations } from '@/translations';

type CaseStudyName = keyof typeof translations.en.caseStudies;

export function useCaseStudyTranslation<K extends CaseStudyName>(caseStudyName: K) {
  const { language } = useLanguage();
  return translations[language].caseStudies[caseStudyName] as typeof translations.en.caseStudies[K];
}
