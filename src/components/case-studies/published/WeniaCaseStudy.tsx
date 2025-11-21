import {
  CaseStudyLayout,
  ContentSection,
  RichText,
  Divider,
} from '@/components/case-studies';
import { useCaseStudyTranslation } from '@/lib/hooks';

export function WeniaCaseStudy() {
  const t = useCaseStudyTranslation('wenia');

  return (
    <CaseStudyLayout
      title={t.title}
      subtitle={t.subtitle}
      heroImage="https://images.unsplash.com/photo-1634542118071-f391e9a0cfb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjcnlwdG8lMjBhcHB8ZW58MXx8fHwxNzU4OTIyODU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
