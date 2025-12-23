import {
  CaseStudyLayout,
  ContentSection,
  RichText,
} from '@/components/case-studies';
import { useCaseStudyTranslation } from '@/lib/hooks';
import imgKlare from "@/assets/images/case-studies/klare_coverImg.png";

export function KlareCaseStudy() {
  const t = useCaseStudyTranslation('klare');

  return (
    <CaseStudyLayout
      title={t.title}
      subtitle={t.subtitle}
      heroImage={imgKlare}
      details={[
        { label: "Role", value: "UI Lead" },
        { label: "Duration", value: "24 months" },
        { label: "Year", value: "2021-2023" },
        { label: "Team", value: "4 Designers, 8 Engineers, 2 PMs" }
      ]}
      seoDescription={t.seoDescription}
    >
      <ContentSection title="Coming Soon" centered>
        <RichText content="Este caso de estudio está en desarrollo. Pronto estará disponible con el contenido completo." centered />
      </ContentSection>
    </CaseStudyLayout>
  );
}

export default KlareCaseStudy;
