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
    >
      <ContentSection title="Coming Soon" centered>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.625', color: 'var(--color-text-secondary)', textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
          Este caso de estudio está en desarrollo. Pronto estará disponible con el contenido completo.
        </p>
      </ContentSection>
    </CaseStudyLayout>
  );
}

export default WeniaCaseStudy;
