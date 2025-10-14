import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { withAppContext } from '../../../../.storybook/decorators';

const meta = {
  title: 'Layout/Header',
  component: Header,
  decorators: [withAppContext],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ minHeight: '200vh', background: 'linear-gradient(to bottom, #f0f0f0, #ffffff)' }}>
      <Header />
      <div style={{ padding: '8rem 2rem 2rem' }}>
        <h1>Scroll down to see header behavior</h1>
        <p>The header changes style when you scroll past 50px</p>
        <div style={{ marginTop: '100vh' }}>
          <h2 id="work">Work Section</h2>
          <p>This is the work section you can navigate to</p>
        </div>
        <div style={{ marginTop: '50vh' }}>
          <h2 id="about">About Section</h2>
          <p>This is the about section you can navigate to</p>
        </div>
        <div style={{ marginTop: '50vh' }}>
          <h2 id="contact">Contact Section</h2>
          <p>This is the contact section you can navigate to</p>
        </div>
      </div>
    </div>
  ),
};

export const Scrolled: Story = {
  render: () => (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ height: '100px' }} />
      <Header />
      <div style={{ padding: '8rem 2rem 2rem' }}>
        <h1>Header in Scrolled State</h1>
        <p>This shows how the header looks after scrolling</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The header changes its appearance when scrolled past 50px, typically adding a background and shadow.',
      },
    },
  },
};

export const WithContent: Story = {
  render: () => (
    <>
      <Header />
      <main style={{ padding: '8rem 2rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem' }}>Portfolio Page</h1>
        <p style={{ marginBottom: '1rem' }}>
          This story demonstrates the header in a typical portfolio page context.
          The header provides navigation to different sections of the page.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Key features:
        </p>
        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
          <li>Sticky positioning at the top</li>
          <li>Animated entrance</li>
          <li>Smooth scroll navigation</li>
          <li>Language switcher (EN/ES)</li>
          <li>Mobile menu with fullscreen overlay</li>
        </ul>

        <div id="work" style={{ marginTop: '4rem', padding: '2rem', background: '#f5f5f5', borderRadius: '8px' }}>
          <h2>Work Section</h2>
          <p>Click "Work" in the header to scroll here</p>
        </div>

        <div id="about" style={{ marginTop: '2rem', padding: '2rem', background: '#f5f5f5', borderRadius: '8px' }}>
          <h2>About Section</h2>
          <p>Click "About" in the header to scroll here</p>
        </div>

        <div id="contact" style={{ marginTop: '2rem', padding: '2rem', background: '#f5f5f5', borderRadius: '8px' }}>
          <h2>Contact Section</h2>
          <p>Click "Contact" in the header to scroll here</p>
        </div>
      </main>
    </>
  ),
};

export const MobileView: Story = {
  render: () => (
    <>
      <Header />
      <div style={{ padding: '8rem 2rem 2rem' }}>
        <h1>Mobile Header</h1>
        <p>Resize your browser or use device emulation to see the mobile menu</p>
        <p style={{ marginTop: '1rem' }}>
          Features:
        </p>
        <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
          <li>Hamburger menu button</li>
          <li>Fullscreen navigation overlay</li>
          <li>Animated menu items</li>
          <li>Body scroll lock when menu is open</li>
        </ul>
      </div>
    </>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const DarkBackground: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', background: '#1a1a1a', color: '#ffffff' }}>
      <Header />
      <div style={{ padding: '8rem 2rem 2rem' }}>
        <h1>Header on Dark Background</h1>
        <p>The header adapts to different background colors</p>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
