import {
  CaseStudyLayout,
  ContentSection,
} from '@/components/case-studies';
import { useCaseStudyTranslation } from '@/lib/hooks';
import imgNMP from "@/assets/images/case-studies/nmp_coverImg.png";

export function NMPCaseStudy() {
  const t = useCaseStudyTranslation('nmp');

  return (
    <CaseStudyLayout
      title={t.title}
      subtitle={t.subtitle}
      heroImage={imgNMP}
      details={[
        { label: "Role", value: "Lead Product Designer" },
        { label: "Duration", value: "18 months" },
        { label: "Year", value: "2022-2023" },
        { label: "Team", value: "5 Designers, 12 Engineers, 3 PMs" }
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

export default NMPCaseStudy;
