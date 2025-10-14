import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { withRouter } from '../../../../.storybook/decorators';
import { ArrowUpRight } from 'lucide-react';

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

// ===== Animated Variants =====

export const WithHoverScale: Story = {
  args: {
    href: '/about',
    children: 'Hover me!',
    whileHover: { scale: 1.05 },
    transition: { duration: 0.2 },
  },
};

export const WithSlideAnimation: Story = {
  args: {
    href: '/contact',
    children: 'Slide on hover',
    whileHover: { x: 10 },
    transition: { duration: 0.3 },
  },
};

export const WithColorChange: Story = {
  args: {
    href: 'https://example.com',
    external: true,
    children: 'External link with animation',
    whileHover: { color: '#8b5cf6' },
    transition: { duration: 0.2 },
  },
};

export const WithFadeIn: Story = {
  args: {
    href: '/about',
    children: 'Appears with animation',
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    whileHover: { scale: 1.05 },
  },
};

export const ButtonStyleAnimated: Story = {
  render: () => (
    <Link
      href="/projects"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '1rem 1.5rem',
        background: 'var(--primary)',
        color: 'white',
        borderRadius: '0.5rem',
        textDecoration: 'none',
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <span>View Projects</span>
      <ArrowUpRight size={20} />
    </Link>
  ),
};
