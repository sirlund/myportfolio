/**
 * Image utility for Astro's image optimization
 * Pre-imports all images for dynamic lookup at runtime
 */

// Import all images from assets folder
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{png,jpg,jpeg,webp,avif,gif}',
  { eager: true }
);

/**
 * Get an optimized image by path
 * @param path - Path relative to /images/ (e.g., "case-studies/treez/cover.png")
 * @returns ImageMetadata for use with Astro's <Image /> component
 */
export function getImage(path: string): ImageMetadata | undefined {
  // Normalize path - remove leading slash if present
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  // Build the full path to match the glob pattern
  const fullPath = `/src/assets/${normalizedPath}`;

  const image = images[fullPath];
  return image?.default;
}

/**
 * Get image or throw if not found (for required images)
 */
export function getImageRequired(path: string): ImageMetadata {
  const image = getImage(path);
  if (!image) {
    throw new Error(`Image not found: ${path}`);
  }
  return image;
}
