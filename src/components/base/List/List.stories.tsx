import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from './List';

const meta = {
  title: 'Base/List',
  component: List,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Flexible list component with ordered/unordered variants. Supports custom markers and responsive spacing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    ordered: {
      control: 'boolean',
      description: 'Use ordered list (ol) instead of unordered (ul)',
    },
    variant: {
      control: 'select',
      options: ['default', 'unstyled', 'compact'],
      description: 'Visual style variant',
    },
    children: {
      control: false,
      description: 'List items (ListItem components)',
    },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unordered: Story = {
  render: () => (
    <List>
      <ListItem>First item in the list</ListItem>
      <ListItem>Second item with more content</ListItem>
      <ListItem>Third item</ListItem>
      <ListItem>Fourth item in the list</ListItem>
    </List>
  ),
};

export const Ordered: Story = {
  render: () => (
    <List ordered>
      <ListItem>First step in the process</ListItem>
      <ListItem>Second step with instructions</ListItem>
      <ListItem>Third step to complete</ListItem>
      <ListItem>Final step in the sequence</ListItem>
    </List>
  ),
};

export const Compact: Story = {
  render: () => (
    <List variant="compact">
      <ListItem>React</ListItem>
      <ListItem>TypeScript</ListItem>
      <ListItem>Vite</ListItem>
      <ListItem>Storybook</ListItem>
      <ListItem>CSS Modules</ListItem>
    </List>
  ),
};

export const Unstyled: Story = {
  render: () => (
    <List variant="unstyled">
      <ListItem>No bullet points</ListItem>
      <ListItem>No numbering</ListItem>
      <ListItem>Clean list style</ListItem>
      <ListItem>Good for custom styling</ListItem>
    </List>
  ),
};

export const OrderedCompact: Story = {
  render: () => (
    <List ordered variant="compact">
      <ListItem>Install dependencies</ListItem>
      <ListItem>Configure settings</ListItem>
      <ListItem>Run development server</ListItem>
      <ListItem>Build for production</ListItem>
    </List>
  ),
};

export const Nested: Story = {
  render: () => (
    <List>
      <ListItem>
        Frontend Technologies
        <List variant="compact">
          <ListItem>React</ListItem>
          <ListItem>TypeScript</ListItem>
          <ListItem>CSS Modules</ListItem>
        </List>
      </ListItem>
      <ListItem>
        Build Tools
        <List variant="compact">
          <ListItem>Vite</ListItem>
          <ListItem>ESBuild</ListItem>
        </List>
      </ListItem>
      <ListItem>
        Documentation
        <List variant="compact">
          <ListItem>Storybook</ListItem>
          <ListItem>Chromatic</ListItem>
        </List>
      </ListItem>
    </List>
  ),
};

export const LongList: Story = {
  render: () => (
    <List ordered>
      <ListItem>Install Node.js and npm on your system</ListItem>
      <ListItem>Create a new project directory and initialize it</ListItem>
      <ListItem>Install React, TypeScript, and Vite as dependencies</ListItem>
      <ListItem>Configure TypeScript with tsconfig.json file</ListItem>
      <ListItem>Set up CSS Modules for component styling</ListItem>
      <ListItem>Create your first component with proper types</ListItem>
      <ListItem>Add Storybook for component documentation</ListItem>
      <ListItem>Configure Chromatic for visual regression testing</ListItem>
      <ListItem>Set up GitHub Actions for CI/CD pipeline</ListItem>
      <ListItem>Deploy to production and celebrate!</ListItem>
    </List>
  ),
};

export const MixedContent: Story = {
  render: () => (
    <List>
      <ListItem>
        <strong>Bold item:</strong> with additional text content
      </ListItem>
      <ListItem>
        <em>Italic item</em> for emphasis
      </ListItem>
      <ListItem>
        Item with <a href="#">a link</a> inside
      </ListItem>
      <ListItem>
        Item with <code>inline code</code> example
      </ListItem>
    </List>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Default</h3>
        <List>
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Compact</h3>
        <List variant="compact">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Unstyled</h3>
        <List variant="unstyled">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      </div>
    </div>
  ),
};
