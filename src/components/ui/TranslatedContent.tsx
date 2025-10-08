/**
 * TranslatedContent - Renders translated text with support for:
 * - Multiline paragraphs (split by \n\n)
 * - HTML formatting tags (<strong>, <em>, etc.)
 *
 * Usage:
 *   <TranslatedContent content={t('about.description1')} />
 *   <TranslatedContent content={t('hero.subtitle')} className="hero-subtitle" />
 */

interface TranslatedContentProps {
  content: string;
  className?: string;
  as?: 'p' | 'div' | 'span';
}

export function TranslatedContent({
  content,
  className = '',
  as: Component = 'p'
}: TranslatedContentProps) {
  // Split by double newlines to create paragraphs
  const paragraphs = content.split('\n\n');

  // If single paragraph, render as single element
  if (paragraphs.length === 1) {
    return (
      <Component
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Multiple paragraphs, render as group
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <Component
          key={index}
          className={className}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </>
  );
}
