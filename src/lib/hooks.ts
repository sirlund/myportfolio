import { useLanguage } from '@/contexts';
import { translations } from '@/translations';

type CaseStudyName = keyof typeof translations.en.caseStudies;

export function useCaseStudyTranslation(caseStudyName: CaseStudyName) {
  const { language } = useLanguage();
  return translations[language].caseStudies[caseStudyName];
}
