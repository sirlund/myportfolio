import {
  CaseStudyLayout,
  ContentSection,
  RichText,
  TwoColumnLayout,
  CardGrid,
  Divider,
  ImagePlaceholder,
  ProcessTimeline,
  ContentImageLayout,
  TokenPyramid,
  ProcessOverview
} from '@/components/case-studies';
import { useCaseStudyTranslation } from '@/lib/hooks';
import imgMindstudio from '@/assets/images/case-studies/mindstudio_cover.png';
import { Target, Layers, GitBranch, Zap } from 'lucide-react';

export function MindStudioCaseStudy() {
  const t = useCaseStudyTranslation('mindstudio');

  return (
    <CaseStudyLayout
      title={t.title}
      subtitle={t.subtitle}
      heroImage={imgMindstudio}
      details={t.details}
    >
      {/* Overview (no label) */}
      <ContentSection title={t.overview.title} titleSize="small">
        <RichText content={t.overview.content} />
      </ContentSection>

      <Divider spacing="large" />

      {/* 01. Challenge */}
      <ContentSection
        label={t.sections.challenge.label}
        title={t.sections.challenge.title}
        centered
      >
        <p style={{ fontSize: '1.125rem', lineHeight: '1.625', color: 'var(--muted-foreground)', marginBottom: '2rem', textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.sections.challenge.intro}
        </p>
        <TwoColumnLayout columns={t.sections.challenge.twoColumn.columns} />

        <ImagePlaceholder
          aspectRatio="16/9"
          label="Figma before: chaos and fragmentation"
          caption="Estado inicial del diseño en Figma"
        />
      </ContentSection>

      <Divider />

      {/* 02. Objectives */}
      <ContentSection
        label={t.sections.objectives.label}
        title={t.sections.objectives.title}
        centered
      >
        <p style={{ fontSize: '1.125rem', lineHeight: '1.625', color: 'var(--muted-foreground)', marginBottom: '3rem', textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.sections.objectives.intro}
        </p>
        <CardGrid
          cards={t.sections.objectives.cards.map((card, index) => ({
            icon: [
              <Target size={32} key="target" />,
              <Layers size={32} key="layers" />,
              <GitBranch size={32} key="gitbranch" />,
              <Zap size={32} key="zap" />
            ][index],
            title: card.title,
            description: card.description
          }))}
        />
      </ContentSection>

      <Divider />

      {/* 03. Process */}
      <ContentSection
        label={t.sections.process.label}
        title={t.sections.process.title}
        centered
      >
        <ProcessOverview
          title="Proceso de alto nivel"
          phases={t.sections.process.overview.phases}
          bottomLabel={t.sections.process.overview.bottomLabel}
        />

        <ProcessTimeline steps={t.sections.process.steps} />

        <TokenPyramid />
      </ContentSection>

      <Divider />

      {/* 04. Results */}
      <ContentSection
        label={t.sections.results.label}
        title={t.sections.results.title}
        centered
      >
        <ContentImageLayout
          content={<RichText content={t.sections.results.content} />}
          image={
            <ImagePlaceholder
              aspectRatio="4/3"
              label="Before/After comparison"
              caption="Comparación antes y después del Design System"
            />
          }
        />
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

      <Divider spacing="large" />

      {/* 06. My Role */}
      <ContentSection
        label={t.sections.role.label}
        title={t.sections.role.title}
        centered
      >
        <ContentImageLayout
          content={<RichText content={t.sections.role.content} />}
          image={
            <ImagePlaceholder
              aspectRatio="4/3"
              label="Team collaboration"
              caption="Colaboración con el equipo de producto"
            />
          }
        />
      </ContentSection>
    </CaseStudyLayout>
  );
}

export default MindStudioCaseStudy;