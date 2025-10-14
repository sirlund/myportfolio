import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Base/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
      description: 'Text size variant',
    },
    color: {
      control: 'select',
      options: ['default', 'muted'],
      description: 'Text color variant',
    },
    as: {
      control: 'select',
      options: ['p', 'div', 'span'],
      description: 'HTML element to render as',
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    children: 'This is large text for prominent content.',
    size: 'lg',
  },
};

export const Medium: Story = {
  args: {
    children: 'This is medium text for regular body content.',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    children: 'This is small text for captions and labels.',
    size: 'sm',
  },
};

export const MutedColor: Story = {
  args: {
    children: 'This is muted text for secondary content.',
    color: 'muted',
  },
};

export const AsSpan: Story = {
  args: {
    children: 'This text is rendered as a span element.',
    as: 'span',
  },
};

export const WithHTML: Story = {
  args: {
    children: 'This text has <strong>bold</strong> and <em>italic</em> formatting.',
    size: 'md',
  },
};

export const Multiline: Story = {
  args: {
    children: 'This is the first paragraph.\n\nThis is the second paragraph after a double newline.',
    size: 'md',
  },
};

export const LongText: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    size: 'md',
  },
  parameters: {
    layout: 'padded',
  },
};
