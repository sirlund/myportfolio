import {
  CaseStudyLayout,
  ContentSection,
  ContentImageLayout,
  Column,
  RichText,
  CardGrid,
  Divider,
} from '@/components/case-studies';
import { Image, Text } from '@/components/base';
import { useCaseStudyTranslation } from '@/lib/hooks';
// import images
import coverImg from '@/assets/images/case-studies/treez/treez_coverImg.png';
import dsOverview from '@/assets/images/case-studies/treez/DS_overview_01.png';
import screenSample1 from '@/assets/images/case-studies/treez/screenSample_01.png'
import screenSample2 from '@/assets/images/case-studies/treez/screenSample_02.png'
import screenSample3 from '@/assets/images/case-studies/treez/screenSample_03.png'
import screenSample4 from '@/assets/images/case-studies/treez/screenSample_04.png'
import compPreview from '@/assets/images/case-studies/treez/compPreview.png'
import compExamples from '@/assets/images/case-studies/treez/compExamples.png'
import compUsage from '@/assets/images/case-studies/treez/compUsage.png'
import compAnatomy from '@/assets/images/case-studies/treez/compAnatomy.png'
import compPlayground from '@/assets/images/case-studies/treez/compPlayground.png'
import autocompleteDocs from '@/assets/images/case-studies/treez/autocompleteDocs.png'
import autocompleteUsecase from '@/assets/images/case-studies/treez/autocompleteUsecase.png'
import autocompleteDosdonts from '@/assets/images/case-studies/treez/autocompleteDos&donts.png'
import SOTbetaColors from '@/assets/images/case-studies/treez/SOTbeta-colors.png'
import SOTbetaButtons from '@/assets/images/case-studies/treez/SOTbeta-buttons.png'


import { Accessibility, AlertCircle, BrainCircuit, BookOpen, BookX, Clock, Code2, Component, Copy, Eye, FileStack, FolderOpen, GitBranch, GitMerge, Layers, Layout, Link2, MonitorSmartphone, Package, RefreshCw, Scan, Search, Shapes, ShieldAlert, ShieldCheck, TestTube, Timer, Unplug, Users } from 'lucide-react';

import styles from './TreezCaseStudy.module.css';

export function TreezCaseStudy() {
  const t = useCaseStudyTranslation('treez');

  return (
    <CaseStudyLayout
      title={t.title}
      subtitle={t.subtitle}
      heroImage={coverImg}
      details={t.details}
      seoDescription={t.seoDescription}
    >
      {/* Overview */}
      <ContentSection title={t.overview.title} titleSize="default">
        <RichText content={t.overview.content} />
      </ContentSection>

      {/* Screen Samples */}
      <ContentImageLayout
        gap="none"
        columns={2}
        stretch={false}
        columnWidths="60fr 40fr"
        className={styles.screenSamples}
      >
        <Image
          src={screenSample1}
          alt="Treez Sample 01"
          aspectRatio="4/3"
          objectFit='contain'
          className={styles.sampleImage}
        />
        <Image
          src={screenSample2}
          alt="Treez Sample 02"
          aspectRatio="1/1"
          objectFit='cover'
        />
        <Image
          src={screenSample3}
          alt="Treez Sample 03"
          aspectRatio="4/3"
        />
        <Image
          src={screenSample4}
          alt="Treez Sample 04"
          aspectRatio="4/3"
          objectFit='contain'
          className={styles.sampleImage}
        />
      </ContentImageLayout>

      <Divider spacing="large" />

      {/* Context */}
      <ContentSection title={t.sections.context.title}>
        <RichText content={t.sections.context.content} />
      </ContentSection>

      <Divider />

      {/* Problem */}
      <ContentSection title={t.sections.problem.title}>
        <RichText content={t.sections.problem.intro} />

        <blockquote className={styles.blockquote}>
          "{t.sections.problem.quote}"
        </blockquote>

        <CardGrid
          variant="horizontal"
          cards={t.sections.problem.challenges.map((challenge, index) => ({
            icon: [
              <Shapes size={28} key="shapes" color="var(--treez-accent-item)" />,
              <FileStack size={28} key="fileStack" color="var(--treez-accent-item)" />,
              <Unplug size={28} key="unplug" color="var(--treez-accent-item)" />,
              <ShieldAlert size={28} key="shieldAlert" color="var(--treez-accent-item)" />,
              <RefreshCw size={28} key="refreshCw" color="var(--treez-accent-item)" />,
              <BookX size={28} key="bookX" color="var(--treez-accent-item)" />
            ][index],
            title: challenge.text,
          }))}
          columns={2}
        />

        <RichText content={t.sections.problem.conclusion} centered />
      </ContentSection>

      <Divider />

      {/* Why Root */}
      <ContentSection title={t.sections.whyRoot.title}>

        <RichText content={t.sections.whyRoot.content} />

        <Image
          src={dsOverview}
          alt="Root Design System"
          caption="Root Design System Visual Style"
          aspectRatio="14/6"
          style={{ margin: 'var(--space-8) 0', width: '100%', borderRadius: 'var(--radius-md)' }}
        />

      </ContentSection>

      <Divider />

      {/* Objectives */}
      <ContentSection title={t.sections.objectives.title}>
        <RichText content={t.sections.objectives.content} />
      </ContentSection>

      <Divider />

      {/* Discovery */}
      <ContentSection title={t.sections.discovery.title} centered>
        <RichText content={t.sections.discovery.intro} centered />

        <CardGrid
          cards={t.sections.discovery.items.map((item, index) => ({
            icon: [
              <Layers size={28} key="layers" color="var(--treez-accent-item)" />,
              <Copy size={28} key="copy" color="var(--treez-accent-item)" />,
              <GitMerge size={28} key="gitMerge" color="var(--treez-accent-item)" />,
              <Eye size={28} key="eye" color="var(--treez-accent-item)" />,
              <Timer size={28} key="timer" color="var(--treez-accent-item)" />
            ][index],
            title: item.title,
            description: item.description
          }))}
          columns={3}
        />

        <RichText content={t.sections.discovery.conclusion} centered />
      </ContentSection>

      <Divider />

      {/* Principles */}
      <ContentSection title={t.sections.principles.title} centered>
        <RichText content={t.sections.principles.intro} centered />

        <CardGrid variant="horizontal"
          cards={t.sections.principles.items.map((principle: string, index: number) => ({
            icon: [
              <Layout size={28} key="layout" color="var(--treez-accent-item)" />,
              <Accessibility size={28} key="accessibility" color="var(--treez-accent-item)" />,
              <MonitorSmartphone size={28} key="monitor" color="var(--treez-accent-item)" />,
              <Code2 size={28} key="code" color="var(--treez-accent-item)" />,
              <BookOpen size={28} key="book" color="var(--treez-accent-item)" />
            ][index],
            title: principle,
            description: ''
          }))}
          columns={2}
        />

        <RichText content={t.sections.principles.conclusion} centered />

        {/* Component Preview */}
        <ContentImageLayout columnLayout gap='compact'>
          <Column naturalWidth={773} naturalHeight={1149}>
            <Image
              src={compPreview}
              alt="Component Preview"
              aspectRatio="773/1149"
              objectFit='cover'
              style={{ borderRadius: 'var(--radius-lg)' }}
              noMargin
            />
          </Column>
          <Column naturalWidth={579} naturalHeight={1133} gap='compact' rowHeights="457fr 676fr">
            <Image
              src={compPlayground}
              alt="Component Playground"
              aspectRatio="579/457"
              objectFit='cover'
              style={{ borderRadius: 'var(--radius-lg)' }}
              noMargin
            />
            <Image
              src={compExamples}
              alt="Component Examples"
              aspectRatio="579/676"
              objectFit='cover'
              style={{ borderRadius: 'var(--radius-lg)' }}
              noMargin
            />
          </Column>
        </ContentImageLayout>
      </ContentSection>

      <Divider />

      {/* Architecture */}
      <ContentSection title={t.sections.architecture.title}>
        <RichText content={t.sections.architecture.intro} />

        <div className={styles.architectureGrid}>
          <div>
            <h3 className={styles.architectureTitle}>{t.sections.architecture.foundations.title}</h3>
            <ul className={styles.architectureList}>
              {t.sections.architecture.foundations.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className={styles.architectureTitleWithMargin}>{t.sections.architecture.components.title}</h3>
            <ul className={styles.architectureList}>
              {t.sections.architecture.components.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.architectureTitle}>{t.sections.architecture.patterns.title}</h3>
            <ul className={styles.architectureList}>
              {t.sections.architecture.patterns.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className={styles.architectureTitleWithMargin}>{t.sections.architecture.documentation.title}</h3>
            <ul className={styles.architectureList}>
              {t.sections.architecture.documentation.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Component Anatomy */}
        <ContentImageLayout
          columnLayout
          gap='compact'
          caption="Component Anatomy and Usage Examples"
        >
          <Column naturalWidth={599} naturalHeight={438}>
            <Image
              src={compAnatomy}
              alt="Component Anatomy"
              aspectRatio="599/438"
              objectFit='cover'
              style={{ borderRadius: 'var(--radius-lg)' }}
              noMargin
            />
          </Column>
          <Column naturalWidth={753} naturalHeight={438}>
            <Image
              src={compUsage}
              alt="Component Usage"
              aspectRatio="753/438"
              objectFit='cover'
              style={{ borderRadius: 'var(--radius-lg)' }}
              noMargin
            />
          </Column>
        </ContentImageLayout>
        {/* Autocomplete */}
        <ContentImageLayout
          columnLayout gap='compact'
          backgroundColor="var(--gray-100)"
          caption="Autocomplete Component Documentation"
          style={{ padding: 'var(--space-4)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}
        >
          <Column naturalWidth={637} naturalHeight={1212}>
            <Image
              src={autocompleteDocs}
              alt="Autocomplete Documentation"
              aspectRatio="637/1212"
              objectFit='cover'
              noMargin
            />
          </Column>
          <Column naturalWidth={637} naturalHeight={1203} gap='compact' rowHeights="704fr 483fr">
            <Image
              src={autocompleteUsecase}
              alt="Autocomplete Use Case"
              aspectRatio="637/704"
              objectFit='cover'
              noMargin
            />
            <Image
              src={autocompleteDosdonts}
              alt="Autocomplete Dos & Don'ts"
              aspectRatio="637/483"
              objectFit='cover'
              noMargin
            />
          </Column>
        </ContentImageLayout>
      </ContentSection>

      <Divider />

      {/* Collaboration */}
      <ContentSection title={t.sections.collaboration.title}>
        <RichText content={`${t.sections.collaboration.intro}\n\n• ${t.sections.collaboration.items.join('\n• ')}\n\n${t.sections.collaboration.conclusion}`} />

        <ContentImageLayout
          columns={2}
          gap='compact'
          caption="Source of Truth: beta Colors and Buttons"
          columnWidths='1201fr 990fr'
          backgroundColor="var(--gray-100)"
          style={{ padding: 'var(--space-4)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}
        >
          <Image
            src={SOTbetaColors}
            alt="SOT beta Colors"
            aspectRatio="1201/808"
            objectFit='cover'
            style={{ borderRadius: 'var(--radius-lg)' }}
            noMargin
          />
          <Image
            src={SOTbetaButtons}
            alt="SOT beta Buttons"
            aspectRatio="905/719"
            objectFit='cover'
            style={{ borderRadius: 'var(--radius-lg)' }}
            noMargin
          />
        </ContentImageLayout>

        <Text className={styles.description} style={{ margin: 'var(--space-12) 0' }}>
          <strong>The 'Source of Truth' Portal:</strong> While architecting the full environment, I deployed this internal reference site. It mapped Figma tokens directly to CSS variables, allowing developers to copy-paste production-ready values, reducing implementation errors to near zero.
        </Text>

      </ContentSection>

      <Divider />

      {/* Outcomes */}
      <ContentSection title={t.sections.outcomes.title} centered>
        <RichText content={t.sections.outcomes.intro} centered />

        <div className={styles.metricsGrid}>
          {t.sections.outcomes.metrics.map((metric, index) => (
            <div key={index} className={styles.metricItem}>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
            </div>
          ))}
        </div>

        <blockquote className={styles.blockquote}>
          "{t.sections.outcomes.quote.text}"
          <cite className={styles.cite}>— {t.sections.outcomes.quote.author}</cite>
        </blockquote>
      </ContentSection>

      <Divider />

      {/* What's Next */}
      <ContentSection title={t.sections.whatsNext.title}>
        <RichText content={t.sections.whatsNext.content} />
      </ContentSection>

      <Divider />

      {/* Reflection */}
      <ContentSection title={t.sections.reflection.title}>
        <RichText content={t.sections.reflection.content} />
      </ContentSection>
    </CaseStudyLayout>
  );
}

export default TreezCaseStudy;
