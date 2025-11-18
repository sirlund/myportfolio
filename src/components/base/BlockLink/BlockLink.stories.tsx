import type { Meta, StoryObj } from '@storybook/react';
import { BlockLink } from './BlockLink';
import { withRouter } from '@/.storybook/decorators';

const meta = {
  title: 'Base/BlockLink',
  component: BlockLink,
  decorators: [withRouter],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Structured link component with title, description, and icon. Perfect for contact sections, resource lists, or any link collection with detailed information. Includes hover animations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'Link destination URL',
    },
    title: {
      control: 'text',
      description: 'Link title/label',
    },
    description: {
      control: 'text',
      description: 'Link description/subtitle',
    },
    external: {
      control: 'boolean',
      description: 'Force external link behavior (opens in new tab)',
    },
  },
} satisfies Meta<typeof BlockLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'mailto:hello@example.com',
    title: 'Email',
    description: 'Get in touch via email',
    whileHover: { x: 10 },
    transition: { duration: 0.3 },
  },
};

export const External: Story = {
  args: {
    href: 'https://linkedin.com/in/example',
    external: true,
    title: 'LinkedIn',
    description: 'Connect with me on LinkedIn',
    whileHover: { x: 10 },
    transition: { duration: 0.3 },
  },
};

export const Internal: Story = {
  args: {
    href: '/resume.pdf',
    title: 'Resume',
    description: 'Download my resume',
    whileHover: { x: 10 },
    transition: { duration: 0.3 },
  },
};

export const Phone: Story = {
  args: {
    href: 'tel:+1234567890',
    title: 'Phone',
    description: 'Call me directly',
    whileHover: { x: 10 },
    transition: { duration: 0.3 },
  },
};

export const LongText: Story = {
  args: {
    href: 'https://example.com',
    external: true,
    title: 'This is a really long title that might wrap to multiple lines',
    description: 'This is an equally long description that provides more context about what this link does and where it leads to',
    whileHover: { x: 10 },
    transition: { duration: 0.3 },
  },
};

export const ContactGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <BlockLink
        href="mailto:hello@example.com"
        title="Email"
        description="Get in touch via email"
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      />
      <BlockLink
        href="https://linkedin.com/in/example"
        external
        title="LinkedIn"
        description="Connect with me professionally"
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      />
      <BlockLink
        href="https://github.com/example"
        external
        title="GitHub"
        description="View my open source work"
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      />
      <BlockLink
        href="/resume.pdf"
        title="Resume"
        description="Download my resume"
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  ),
};

export const WithFadeIn: Story = {
  args: {
    href: 'mailto:hello@example.com',
    title: 'Email',
    description: 'Get in touch via email',
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    whileHover: { x: 10 },
  },
};

export const ResourceLinks: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <BlockLink
        href="https://docs.example.com"
        external
        title="Documentation"
        description="Read the full documentation"
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      />
      <BlockLink
        href="https://github.com/example/repo"
        external
        title="Source Code"
        description="View on GitHub"
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      />
      <BlockLink
        href="/api"
        title="API Reference"
        description="Explore the API endpoints"
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  ),
};
