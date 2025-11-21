import {
  CaseStudyLayout,
  ContentSection,
} from '@/components/case-studies';
import { useCaseStudyTranslation } from '@/lib/hooks';

export function KlareCaseStudy() {
  const t = useCaseStudyTranslation('klare');

  return (
    <CaseStudyLayout
      title={t.title}
      subtitle={t.subtitle}
      heroImage="https://images.unsplash.com/photo-1711185898083-e1f04ff38300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODkyMjg2NXww&ixlib=rb-4.1.0&q=80&w=1080"
      details={[
        { label: "Role", value: "UI Lead" },
        { label: "Duration", value: "24 months" },
        { label: "Year", value: "2021-2023" },
        { label: "Team", value: "4 Designers, 8 Engineers, 2 PMs" }
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

export default KlareCaseStudy;
