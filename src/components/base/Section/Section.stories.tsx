import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';
import { Container } from '../Container/Container';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

const meta = {
  title: 'Base/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Section ID for navigation anchors',
    },
    variant: {
      control: 'text',
      description: 'Section variant for custom styling',
    },
    children: {
      control: false,
      description: 'Section content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Section>
      <Container>
        <Heading level={2}>Section Component</Heading>
        <Text>
          The Section component provides semantic HTML5 section elements with
          consistent spacing and optional IDs for navigation.
        </Text>
      </Container>
    </Section>
  ),
};

export const WithId: Story = {
  render: () => (
    <Section id="about">
      <Container>
        <Heading level={2}>About Section</Heading>
        <Text>
          This section has an ID attribute which can be used for navigation
          anchors. Users can link directly to #about.
        </Text>
      </Container>
    </Section>
  ),
};

export const WithVariant: Story = {
  render: () => (
    <Section id="hero" variant="hero-variant">
      <Container>
        <Heading level={1}>Hero Section</Heading>
        <Text size="lg">
          This section uses a variant prop that can be used for custom styling
          via CSS or additional classes.
        </Text>
      </Container>
    </Section>
  ),
};

export const MultipleSections: Story = {
  render: () => (
    <>
      <Section id="intro">
        <Container>
          <Heading level={2}>Introduction</Heading>
          <Text>First section content with navigation ID.</Text>
        </Container>
      </Section>
      <Section id="features" style={{ background: 'var(--muted)', padding: '4rem 0' }}>
        <Container>
          <Heading level={2}>Features</Heading>
          <Text>Second section with background styling.</Text>
        </Container>
      </Section>
      <Section id="contact">
        <Container>
          <Heading level={2}>Contact</Heading>
          <Text>Third section for contact information.</Text>
        </Container>
      </Section>
    </>
  ),
};

export const FullPageLayout: Story = {
  render: () => (
    <>
      <Section id="hero" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Heading level={1}>Welcome to Our Site</Heading>
          <Text size="lg">
            This is a hero section that takes up half the viewport height.
          </Text>
        </Container>
      </Section>
      <Section id="about" style={{ padding: '4rem 0' }}>
        <Container>
          <Heading level={2}>About Us</Heading>
          <Text>
            Learn more about our company and what we do. This section has
            consistent padding for comfortable reading.
          </Text>
        </Container>
      </Section>
      <Section id="services" style={{ background: 'var(--muted)', padding: '4rem 0' }}>
        <Container>
          <Heading level={2}>Our Services</Heading>
          <Text>
            Explore the services we offer. This section has a different
            background color to create visual separation.
          </Text>
        </Container>
      </Section>
    </>
  ),
};

export const WithoutContainer: Story = {
  render: () => (
    <Section id="full-width" style={{ padding: '4rem 0', background: 'var(--muted)' }}>
      <Heading level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Full Width Section
      </Heading>
      <Text style={{ textAlign: 'center' }}>
        This section doesn't use Container, so content extends full width.
      </Text>
    </Section>
  ),
};

export const SectionComparison: Story = {
  render: () => (
    <>
      <Section style={{ border: '2px solid red', padding: '2rem 0' }}>
        <Container>
          <Text>Section with Container (content is constrained)</Text>
        </Container>
      </Section>
      <Section style={{ border: '2px solid blue', padding: '2rem', marginTop: '2rem' }}>
        <Text>Section without Container (content is full width)</Text>
      </Section>
    </>
  ),
};
