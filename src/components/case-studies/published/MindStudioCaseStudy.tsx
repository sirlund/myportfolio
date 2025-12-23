import {
  CaseStudyLayout,
  ContentSection,
  RichText,
  TwoColumnLayout,
  CardGrid,
  Divider,
  ProcessTimeline,
  ContentImageLayout,
  TokenPyramid,
  ProcessOverview
} from '@/components/case-studies';
import { Image } from '@/components/base';
import { useCaseStudyTranslation } from '@/lib/hooks';
import imgMindstudio from '@/assets/images/case-studies/mindstudio/mindstudio_coverImg.png';

import {
  Target,
  Layers,
  GitBranch,
  Zap,
  FileJson2,
  BrainCircuit,
  ZapOff,
  ShieldCheck, // Para "Stop the Bleeding"
  Workflow,    // Para "Unlock Complexity" (Canvas)
  MoonStar,    // Para "Validate Scalability" (Dark Mode)
  Rocket,      // Para "Faster Handoff"
  CheckCircle, // Para "Quality at Scale"
  Unlock       // Para "Unlocked Dark Mode"
} from 'lucide-react';
export function MindStudioCaseStudy() {
  const t = useCaseStudyTranslation('mindstudio');

  return (
    <CaseStudyLayout
      title={t.title}
      subtitle={t.subtitle}
      heroImage={imgMindstudio}
      details={t.details}
      seoDescription={t.seoDescription}
    >
      {/* Overview (no label) */}
      <ContentSection title={t.overview.title} titleSize="default">
        <RichText content={t.overview.content} />
      </ContentSection>

      <Divider spacing="large" />

      {/* 01. Challenge */}
      <ContentSection
        label={t.sections.challenge.label}
        title={t.sections.challenge.title}
        centered
      >
        <RichText content={t.sections.challenge.intro} centered />
        <CardGrid
          columns={3}
          cards={t.sections.challenge.cards.map((card, index) => ({
            icon: [
              <FileJson2 size={32} key="filejson" />,
              <BrainCircuit size={32} key="brain" />,
              <ZapOff size={32} key="zapoff" />
            ][index],
            title: card.title,
            description: card.description
          }))}
        />

        <Image
          aspectRatio="16/9"
          label="Figma before: chaos and fragmentation"
          caption="Estado inicial del diseño en Figma"
          alt="Estado inicial del diseño en Figma"
          style={{ marginTop: 'var(--space-12)', borderRadius: 'var(--radius-md)' }}
        />
      </ContentSection>

      <Divider />

      {/* 02. Objectives */}
      <ContentSection
        label={t.sections.objectives.label}
        title={t.sections.objectives.title}
        centered
      >
        <RichText content={t.sections.objectives.intro} centered />
        <CardGrid
          cards={t.sections.objectives.cards.map((card, index) => ({
            icon: [
              <ShieldCheck size={32} key="shieldcheck" />,
              <Workflow size={32} key="workflow" />,
              <MoonStar size={32} key="moonstar" />,
              <Zap size={32} key="zap" />
            ][index],
            title: card.title,
            description: card.description
          }))}
          columns={3}
        />
      </ContentSection>

      <Divider />

      {/* 03. Process */}
      <ContentSection
        label={t.sections.process.label}
        title={t.sections.process.title}
        centered
      >
        <RichText content={t.sections.process.intro} centered />
        <ProcessOverview
          title="Proceso de alto nivel"
          phases={t.sections.process.overview.phases}
          bottomLabel={t.sections.process.overview.bottomLabel}
        />

        <ProcessTimeline steps={t.sections.process.steps} />

        <div style={{ marginTop: 'var(--space-8)' }}>
          <CardGrid
            columns={3}
            cards={t.sections.process.phase3.cards.map((card: any, index: number) => ({
              icon: [
                <Workflow size={32} key="workflow" />,
                <FileJson2 size={32} key="json" />,
                <MoonStar size={32} key="moon" />
              ][index],
              title: card.title,
              description: card.description
            }))}
          />
        </div>
      </ContentSection>

      <Divider />

      {/* 04. Results */}
      <ContentSection
        label={t.sections.results.label}
        title={t.sections.results.title}
        centered
      >
        <ContentImageLayout columns={2}>
          <div>
            {t.sections.results.intro && (
              <RichText content={t.sections.results.intro} className="mb-6" />
            )}

            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
              {t.sections.results.metrics.map((metric: any, index: number) => (
                <li key={index} style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-3)' }}>
                  <div style={{ color: 'var(--color-text-primary)', flexShrink: 0 }}>
                    {[
                      <Rocket size={20} key="rocket" />,
                      <Layers size={20} key="layers" />,
                      <CheckCircle size={20} key="check" />,
                      <Unlock size={20} key="unlock" />
                    ][index]}
                  </div>
                  <span
                    style={{ fontSize: 'var(--font-sm)', lineHeight: 'var(--leading-normal)' }}
                    dangerouslySetInnerHTML={{ __html: metric.text }}
                  />
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 'var(--space-8)', paddingLeft: 'var(--space-4)', borderLeft: '2px solid var(--color-interactive-primary)' }}>
              <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)' }}>
                "{t.sections.results.quote}"
              </p>
            </div>
          </div>
          <Image
            aspectRatio="1/1"
            label="Before/After comparison"
            caption="Comparación antes y después del Design System"
            alt="Comparación antes y después del Design System"
            noMargin
          />
        </ContentImageLayout>
      </ContentSection>

      <Divider />

      {/* 05. Reflection */}
      <ContentSection
        label={t.sections.reflection.label}
        title={t.sections.reflection.title}
        centered
      >
        <RichText content={t.sections.reflection.content} />
      </ContentSection>

    </CaseStudyLayout>
  );
}

export default MindStudioCaseStudy;