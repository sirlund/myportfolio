import {
  CaseStudyLayout,
  ContentSection,
  ContentImageLayout,
  Column,
  RichText,
  CardGrid,
  Divider,
} from '@/components/case-studies';
import { Image } from '@/components/base';
import { useCaseStudyTranslation } from '@/lib/hooks';
// import images
import coverImg from '@/assets/images/case-studies/treez/treez_coverImg.png';
import dsOverview from '@/assets/images/case-studies/treez/DS_overview_01.png';
import screenSample1 from '@/assets/images/case-studies/treez/screenSample_01.png'
import screenSample2 from '@/assets/images/case-studies/treez/screenSample_02.png'
import screenSample3 from '@/assets/images/case-studies/treez/screenSample_03.png'
import screenSample4 from '@/assets/images/case-studies/treez/screenSample_04.png'
import { AlertCircle, FolderOpen, Link2, Accessibility, TestTube, Clock } from 'lucide-react';

export function TreezCaseStudy() {
  const t = useCaseStudyTranslation('treez');

  return (
    <CaseStudyLayout
      title={t.title}
      subtitle={t.subtitle}
      heroImage={coverImg}
      details={t.details}
    >
      {/* Overview */}
      <ContentSection title={t.overview.title} titleSize="small">
        <RichText content={t.overview.content} />
      </ContentSection>

      <Divider spacing="large" />

      {/* Context */}
      <ContentSection title={t.sections.context.title}>
        <RichText content={t.sections.context.content} />
      </ContentSection>

      <Divider />

      {/* Problem */}
      <ContentSection title={t.sections.problem.title} centered>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.625', color: 'var(--color-text-secondary)', marginBottom: '2rem', textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.sections.problem.intro}
        </p>

        <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-text-secondary)', borderLeft: '4px solid var(--color-border-default)', paddingLeft: '1.5rem', margin: '2rem auto', maxWidth: '48rem' }}>
          "{t.sections.problem.quote}"
        </blockquote>

        <CardGrid
          cards={t.sections.problem.challenges.map((challenge, index) => ({
            icon: [
              <AlertCircle size={24} key="alert" />,
              <FolderOpen size={24} key="folder" />,
              <Link2 size={24} key="link" />,
              <Accessibility size={24} key="accessibility" />,
              <TestTube size={24} key="test" />,
              <Clock size={24} key="clock" />
            ][index],
            title: challenge.text,
            description: ''
          }))}
          columns={3}
        />

        <p style={{ fontSize: '1.125rem', lineHeight: '1.625', color: 'var(--color-text-secondary)', marginTop: '2rem', textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.sections.problem.conclusion}
        </p>
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
            style={{ margin: '2rem 0', width: '100%', borderRadius: '0.5rem' }}
          />
        <ContentImageLayout columnLayout gap='none'>
          <Column width="60%">
            <Image
              src={screenSample1}
              alt="sample 01"
              aspectRatio="4/3"
              objectFit='contain'
              style={{ backgroundColor:'#F7F7F7' }}
              noMargin
            />
          </Column>
          <Column width="40%" gap='none'>
            <Image
              src={screenSample2}
              alt="sample 02"
              aspectRatio="1/1"
              objectFit='cover'
              noMargin
            />
            <Image
              src={screenSample3}
              alt="sample 03"
              aspectRatio="4/3"
              noMargin
            />
          </Column>
        </ContentImageLayout>

        <ContentImageLayout columnLayout gap='compact'>
          <Column width="40%" gap='compact'>
            <Image
              src={screenSample3}
              alt="sample 03"
              aspectRatio="4/3"
              noMargin
            />
            <Image
              src={screenSample4}
              alt="sample 04"
              aspectRatio="4/3"
              objectFit='contain'
              style={{ backgroundColor:'#F7F7F7' }}
              noMargin
            />
          </Column>
          <Column width="60%">
            <Image
              src={screenSample1}
              alt="sample 01"
              aspectRatio="4/3"
              objectFit='contain'
              style={{ backgroundColor:'#F7F7F7' }}
              noMargin
            />
          </Column>
        </ContentImageLayout>

        <ContentImageLayout columns={2} stretch={false} columnWidths="60% 40%">
          <Image
            src={screenSample1}
            alt="sample 01"
            aspectRatio="4/3"
            objectFit='contain'
            caption="lol"
            style={{ backgroundColor:'#F7F7F7' }}
          />
          <Image
            src={screenSample2}
            alt="sample 02"
            aspectRatio="1/1"
            caption="lol"
            objectFit='cover'
          />
          <Image
            src={screenSample3}
            alt="sample 03"
            caption="lol"
            aspectRatio="4/3"
          />
          <Image
            src={screenSample4}
            alt="sample 04"
            aspectRatio="4/3"
            objectFit='contain'
            caption="lol"
            style={{ backgroundColor:'#F7F7F7' }}
          />
        </ContentImageLayout>
        
      </ContentSection>

      <Divider />

      {/* Objectives */}
      <ContentSection title={t.sections.objectives.title}>
        <RichText content={t.sections.objectives.content} />
      </ContentSection>

      <Divider />

      {/* Discovery */}
      <ContentSection title={t.sections.discovery.title} centered>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.625', color: 'var(--color-text-secondary)', marginBottom: '2rem', textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.sections.discovery.intro}
        </p>

        <CardGrid
          cards={t.sections.discovery.items.map((item) => ({
            title: item.title,
            description: item.description
          }))}
          columns={2}
        />

        <p style={{ fontSize: '1.125rem', lineHeight: '1.625', color: 'var(--color-text-secondary)', marginTop: '2rem', textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.sections.discovery.conclusion}
        </p>
      </ContentSection>

      <Divider />

      {/* Principles */}
      <ContentSection title={t.sections.principles.title} centered>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.625', color: 'var(--color-text-secondary)', marginBottom: '2rem', textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.sections.principles.intro}
        </p>

        <CardGrid
          cards={t.sections.principles.items.map((principle) => ({
            title: principle,
            description: ''
          }))}
          columns={2}
        />

        <p style={{ fontSize: '1.125rem', lineHeight: '1.625', color: 'var(--color-text-secondary)', marginTop: '2rem', textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.sections.principles.conclusion}
        </p>
      </ContentSection>

      <Divider />

      {/* Architecture */}
      <ContentSection title={t.sections.architecture.title}>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.625', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
          {t.sections.architecture.intro}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>{t.sections.architecture.foundations.title}</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
              {t.sections.architecture.foundations.items.map((item, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', marginTop: '2rem' }}>{t.sections.architecture.components.title}</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
              {t.sections.architecture.components.items.map((item, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>{t.sections.architecture.patterns.title}</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
              {t.sections.architecture.patterns.items.map((item, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', marginTop: '2rem' }}>{t.sections.architecture.documentation.title}</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }}>
              {t.sections.architecture.documentation.items.map((item, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </ContentSection>

      <Divider />

      {/* Collaboration */}
      <ContentSection title={t.sections.collaboration.title}>
        <div dangerouslySetInnerHTML={{ __html: t.sections.collaboration.intro }} style={{ fontSize: '1.125rem', lineHeight: '1.625', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }} />

        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
          {t.sections.collaboration.items.map((item, index) => (
            <li key={index} style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>{item}</li>
          ))}
        </ul>

        <p style={{ fontSize: '1.125rem', lineHeight: '1.625', color: 'var(--color-text-secondary)' }}>
          {t.sections.collaboration.conclusion}
        </p>
      </ContentSection>

      <Divider />

      {/* Outcomes */}
      <ContentSection title={t.sections.outcomes.title} centered>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.625', color: 'var(--color-text-secondary)', marginBottom: '2rem', textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {t.sections.outcomes.intro}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
          {t.sections.outcomes.metrics.map((metric, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{metric.value}</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{metric.label}</div>
            </div>
          ))}
        </div>

        <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-text-secondary)', borderLeft: '4px solid var(--color-border-default)', paddingLeft: '1.5rem', margin: '2rem auto', maxWidth: '48rem' }}>
          "{t.sections.outcomes.quote.text}"
          <cite style={{ display: 'block', marginTop: '0.5rem', fontSize: '1rem', fontStyle: 'normal' }}>— {t.sections.outcomes.quote.author}</cite>
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
