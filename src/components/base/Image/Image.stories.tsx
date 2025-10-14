import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta = {
  title: 'Base/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for accessibility',
    },
    aspectRatio: {
      control: 'text',
      description: 'CSS aspect-ratio (e.g., "16/9", "1/1")',
    },
    objectFit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      description: 'How the image should fit its container',
    },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
      description: 'Loading strategy',
    },
    fallbackSrc: {
      control: 'text',
      description: 'Fallback image when src fails to load',
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    alt: 'Abstract colorful gradient',
  },
  parameters: {
    layout: 'padded',
  },
};

export const Square: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
    alt: 'Square aspect ratio image',
    aspectRatio: '1/1',
  },
};

export const Landscape: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    alt: 'Landscape 16:9 image',
    aspectRatio: '16/9',
  },
  parameters: {
    layout: 'padded',
  },
};

export const Portrait: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
    alt: 'Portrait 9:16 image',
    aspectRatio: '9/16',
  },
};

export const ObjectFitCover: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    alt: 'Object fit cover',
    aspectRatio: '16/9',
    objectFit: 'cover',
  },
  parameters: {
    layout: 'padded',
  },
};

export const ObjectFitContain: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    alt: 'Object fit contain',
    aspectRatio: '16/9',
    objectFit: 'contain',
  },
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
  },
};

export const LazyLoading: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    alt: 'Lazy loaded image',
    loading: 'lazy',
  },
  parameters: {
    layout: 'padded',
  },
};

export const EagerLoading: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    alt: 'Eager loaded image',
    loading: 'eager',
  },
  parameters: {
    layout: 'padded',
  },
};

export const BrokenImage: Story = {
  args: {
    src: 'https://invalid-url-that-will-fail.com/image.jpg',
    alt: 'Broken image showing fallback',
  },
  parameters: {
    layout: 'padded',
  },
};

export const CustomFallback: Story = {
  args: {
    src: 'https://invalid-url.com/image.jpg',
    alt: 'Custom fallback image',
    fallbackSrc: 'https://via.placeholder.com/400x300?text=Custom+Fallback',
    aspectRatio: '4/3',
  },
  parameters: {
    layout: 'padded',
  },
};

export const MultipleImages: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '900px' }}>
      <Image
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400"
        alt="Image 1"
        aspectRatio="1/1"
      />
      <Image
        src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400"
        alt="Image 2"
        aspectRatio="1/1"
      />
      <Image
        src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=400"
        alt="Image 3"
        aspectRatio="1/1"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
