import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { ICONS } from './iconRegistry';

const meta = {
  title: 'Foundation/Icons',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(ICONS),
      description: 'Icon name from the registry',
    },
    size: {
      control: { type: 'range', min: 16, max: 200, step: 8 },
      description: 'Icon size in pixels or CSS unit',
    },
    color: {
      control: 'color',
      description: 'Icon color (overrides default fill)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mindstudio: Story = {
  args: {
    name: 'mindstudio',
    size: 80,
  },
};

export const Treez: Story = {
  args: {
    name: 'treez',
    size: 120,
  },
};

export const SmallSize: Story = {
  args: {
    name: 'mindstudio',
    size: 24,
  },
};

export const MediumSize: Story = {
  args: {
    name: 'mindstudio',
    size: 48,
  },
};

export const LargeSize: Story = {
  args: {
    name: 'mindstudio',
    size: 96,
  },
};

export const CustomColor: Story = {
  args: {
    name: 'mindstudio',
    size: 64,
    color: '#3b82f6',
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Icon name="mindstudio" size={64} color="#ef4444" />
      <Icon name="mindstudio" size={64} color="#f59e0b" />
      <Icon name="mindstudio" size={64} color="#10b981" />
      <Icon name="mindstudio" size={64} color="#3b82f6" />
      <Icon name="mindstudio" size={64} color="#8b5cf6" />
    </div>
  ),
};

export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon name="treez" size={32} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#999' }}>32px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="treez" size={48} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#999' }}>48px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="treez" size={64} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#999' }}>64px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="treez" size={96} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#999' }}>96px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="treez" size={128} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#999' }}>128px</div>
      </div>
    </div>
  ),
};

export const IconGallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem', padding: '2rem' }}>
      {(Object.keys(ICONS) as Array<keyof typeof ICONS>).map((iconName) => (
        <div
          key={iconName}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb',
          }}
        >
          <Icon name={iconName} size={80} />
          <div style={{ marginTop: '1rem', fontWeight: '500', fontSize: '0.875rem' }}>
            {iconName}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const AllIconsSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '2rem' }}>
      {(Object.keys(ICONS) as Array<keyof typeof ICONS>).map((iconName) => (
        <div key={iconName}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '600' }}>
            {iconName}
          </h3>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}>
            <div style={{ textAlign: 'center' }}>
              <Icon name={iconName} size={24} />
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#999' }}>24px</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Icon name={iconName} size={32} />
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#999' }}>32px</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Icon name={iconName} size={48} />
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#999' }}>48px</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Icon name={iconName} size={64} />
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#999' }}>64px</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Icon name={iconName} size={96} />
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#999' }}>96px</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const ResponsiveIcon: Story = {
  render: () => (
    <div style={{ width: '300px', padding: '2rem', border: '2px dashed #ccc' }}>
      <Icon name="mindstudio" size="100%" />
      <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
        Icon with size="100%" adapts to container width
      </p>
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <p style={{ fontSize: '1.125rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      Check out
      <Icon name="mindstudio" size={24} style={{ display: 'inline-block' }} />
      Mindstudio and
      <Icon name="treez" size={48} style={{ display: 'inline-block' }} />
      Treez projects
    </p>
  ),
};

export const DarkBackground: Story = {
  render: () => (
    <div style={{ background: '#1a1a1a', padding: '3rem', borderRadius: '8px' }}>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <Icon name="mindstudio" size={80} />
        <Icon name="treez" size={100} />
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
