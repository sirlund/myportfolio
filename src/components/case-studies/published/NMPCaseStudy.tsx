import {
  CaseStudyLayout,
  ContentSection,
} from '@/components/case-studies';
import { useCaseStudyTranslation } from '@/lib/hooks';

export function NMPCaseStudy() {
  const t = useCaseStudyTranslation('nmp');

  return (
    <CaseStudyLayout
      title={t.title}
      subtitle={t.subtitle}
      heroImage="https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzZXJ2aWNlcyUyMGRlc2lnbnxlbnwxfHx8fDE3NTg5MjI4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
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
