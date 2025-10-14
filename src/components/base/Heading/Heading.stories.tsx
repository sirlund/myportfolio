import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
  title: 'Base/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level (h1-h6)',
    },
    children: {
      control: 'text',
      description: 'Heading content',
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: 'Heading Level 1',
    level: 1,
  },
};

export const H2: Story = {
  args: {
    children: 'Heading Level 2',
    level: 2,
  },
};

export const H3: Story = {
  args: {
    children: 'Heading Level 3',
    level: 3,
  },
};

export const H4: Story = {
  args: {
    children: 'Heading Level 4',
    level: 4,
  },
};

export const H5: Story = {
  args: {
    children: 'Heading Level 5',
    level: 5,
  },
};

export const H6: Story = {
  args: {
    children: 'Heading Level 6',
    level: 6,
  },
};

export const LongHeading: Story = {
  args: {
    children: 'This is a Very Long Heading That Spans Multiple Lines',
    level: 2,
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
