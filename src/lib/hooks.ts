import { useLanguage } from './contexts';
import { mindstudioTranslations } from '../translations/case-studies/mindstudio';
import { treezTranslations } from '../translations/case-studies/treez';

const caseStudyTranslations = {
  mindstudio: mindstudioTranslations,
  treez: treezTranslations,
  // Add more case studies here as they're created
  // wenia: weniaTranslations,
  // nacional: nacionalTranslations,
  // klare: klareTranslations,
};

type CaseStudyName = keyof typeof caseStudyTranslations;

export function useCaseStudyTranslation(caseStudyName: CaseStudyName) {
  const { language } = useLanguage();
  const translations = caseStudyTranslations[caseStudyName];
  return translations[language];
}
