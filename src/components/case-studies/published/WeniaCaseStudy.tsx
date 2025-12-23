import {
  CaseStudyLayout,
  ContentSection,
  RichText,
  Divider,
} from '@/components/case-studies';
import { useCaseStudyTranslation } from '@/lib/hooks';
import imgWenia from "@/assets/images/case-studies/wenia_coverImg.png";

export function WeniaCaseStudy() {
  const t = useCaseStudyTranslation('wenia');

  return (
    <CaseStudyLayout
      title={t.title}
      subtitle={t.subtitle}
      heroImage={imgWenia}
      details={[
        { label: "Role", value: "Senior Product Designer" },
        { label: "Duration", value: "10 months" },
        { label: "Year", value: "2023" },
        { label: "Team", value: "3 Designers, 6 Engineers, 2 PMs" }
      ]}
      seoDescription={t.seoDescription}
    >
      <ContentSection title="Coming Soon" centered>
        <RichText content="Este caso de estudio está en desarrollo. Pronto estará disponible con el contenido completo." centered />
      </ContentSection>
    </CaseStudyLayout>
  );
}

export default WeniaCaseStudy;
