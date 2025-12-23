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
import tokenHierarchy from '@/assets/images/case-studies/mindstudio/token-hierarchy.png';
import { Target, Layers, GitBranch, Zap } from 'lucide-react';

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
        <RichText content={t.sections.challenge.intro} centered />
        <TwoColumnLayout columns={t.sections.challenge.twoColumn.columns} />

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

        <Image
          src={tokenHierarchy}
          alt="Token Hierarchy"
          caption="Design System Token Hierarchy"
          aspectRatio="92/45"
          style={{ margin: 'var(--space-8) 0', width: '100%', borderRadius: 'var(--radius-md)' }}
        />
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
            <RichText content={t.sections.results.content} />
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

      <Divider spacing="large" />

      {/* 06. My Role */}
      <ContentSection
        label={t.sections.role.label}
        title={t.sections.role.title}
        centered
      >
        <ContentImageLayout columns={2}>
          <div>
            <RichText content={t.sections.role.content} />
          </div>
          <Image
            aspectRatio="1/1"
            label="Team collaboration"
            caption="Colaboración con el equipo de producto"
            alt="Colaboración con el equipo de producto"
            noMargin
          />
        </ContentImageLayout>
      </ContentSection>
    </CaseStudyLayout>
  );
}

export default MindStudioCaseStudy;