import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

const meta = {
  title: 'Base/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Container content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Container>
      <Heading level={2}>Container Component</Heading>
      <Text>
        The Container component provides consistent max-width and padding across
        the application. It centers content and ensures proper spacing on all
        screen sizes.
      </Text>
    </Container>
  ),
};

export const WithText: Story = {
  render: () => (
    <Container>
      <Heading level={1}>Welcome</Heading>
      <Text size="lg">
        This is a container with a large heading and body text. The container
        ensures content never gets too wide on large screens and maintains
        comfortable reading line lengths.
      </Text>
      <Text>
        Additional paragraph text to show how multiple text blocks look within
        the container. The spacing is consistent and responsive.
      </Text>
    </Container>
  ),
};

export const MultipleContainers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <Container>
        <Heading level={2}>First Container</Heading>
        <Text>Content in the first container section.</Text>
      </Container>
      <Container>
        <Heading level={2}>Second Container</Heading>
        <Text>Content in the second container section.</Text>
      </Container>
      <Container>
        <Heading level={2}>Third Container</Heading>
        <Text>Content in the third container section.</Text>
      </Container>
    </div>
  ),
};

export const NestedContent: Story = {
  render: () => (
    <Container>
      <Heading level={1}>Complex Layout</Heading>
      <Text size="lg">
        Containers can hold complex nested content structures.
      </Text>
      <div style={{ marginTop: '2rem' }}>
        <Heading level={3}>Subsection</Heading>
        <Text>
          This is a nested section with its own heading and text. The container
          maintains proper spacing for all nested elements.
        </Text>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <Heading level={3}>Another Subsection</Heading>
        <Text>More nested content to demonstrate the container's flexibility.</Text>
      </div>
    </Container>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Container>
      <Heading level={1}>Long Form Content</Heading>
      <Text size="lg">
        This example demonstrates how the container handles longer content
        blocks with multiple paragraphs.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Text>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <Text>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </Text>
    </Container>
  ),
};

export const EmptyContainer: Story = {
  render: () => (
    <div style={{ border: '2px dashed #ccc', minHeight: '200px' }}>
      <Container>
        <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
          Empty container with dashed border to show boundaries
        </div>
      </Container>
    </div>
  ),
};
