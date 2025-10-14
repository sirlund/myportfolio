import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { withRouter } from '../../../../.storybook/decorators';

const meta = {
  title: 'Base/Link',
  component: Link,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'Link destination URL',
    },
    external: {
      control: 'boolean',
      description: 'Force external link behavior (opens in new tab)',
    },
    children: {
      control: 'text',
      description: 'Link text content',
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Internal: Story = {
  args: {
    href: '/about',
    children: 'Internal navigation link',
  },
};

export const External: Story = {
  args: {
    href: 'https://nlund.in',
    children: 'External website link',
  },
};

export const ExternalExplicit: Story = {
  args: {
    href: 'https://github.com',
    external: true,
    children: 'GitHub Profile (explicit external)',
  },
};

export const Email: Story = {
  args: {
    href: 'mailto:hello@example.com',
    children: 'Send email',
  },
};

export const Phone: Story = {
  args: {
    href: 'tel:+1234567890',
    children: 'Call us',
  },
};

export const InlineText: Story = {
  render: () => (
    <p style={{ maxWidth: '400px' }}>
      This is a paragraph with an{' '}
      <Link href="/about">inline internal link</Link> and also an{' '}
      <Link href="https://example.com">external link</Link> for comparison.
    </p>
  ),
};

export const LongText: Story = {
  args: {
    href: '/very-long-page-url',
    children: 'This is a really long link text that might wrap to multiple lines',
  },
  parameters: {
    layout: 'padded',
  },
};
