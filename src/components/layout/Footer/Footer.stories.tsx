import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { withAppContext } from '../../../../.storybook/decorators';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  decorators: [withAppContext],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, padding: '2rem' }}>
        <h1>Page Content</h1>
        <p>Scroll down to see the footer at the bottom of the page</p>
      </div>
      <Footer />
    </div>
  ),
};

export const WithPageContent: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main style={{ flex: 1, padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem' }}>Portfolio Page</h1>
        <p style={{ marginBottom: '1rem' }}>
          This story demonstrates the footer in a typical page layout context.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          The footer includes:
        </p>
        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
          <li>Copyright notice with current year</li>
          <li>Social media links (LinkedIn, Dribbble)</li>
          <li>Contact email link</li>
          <li>Smooth entrance animation</li>
        </ul>
        <p style={{ color: '#666' }}>
          The footer stays at the bottom of the page and uses a fade-in animation
          when it comes into view.
        </p>
      </main>
      <Footer />
    </div>
  ),
};

export const LightBackground: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
      <div style={{ flex: 1, padding: '2rem' }}>
        <h1>Light Background</h1>
        <p>Footer on a light background</p>
      </div>
      <Footer />
    </div>
  ),
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkBackground: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#030213' }}>
      <div style={{ flex: 1, padding: '2rem', color: '#ffffff' }}>
        <h1>Dark Background</h1>
        <p>Footer on a dark background</p>
      </div>
      <Footer />
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const WithLongContent: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <main style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Long Page Content</h1>
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <h2>Section {i + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const MobileView: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, padding: '2rem' }}>
        <h1>Mobile Footer</h1>
        <p>The footer links stack vertically on mobile devices</p>
      </div>
      <Footer />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const FooterOnly: Story = {
  render: () => <Footer />,
  parameters: {
    layout: 'padded',
  },
};
