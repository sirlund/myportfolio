interface RichTextProps {
  /**
   * Text content with support for:
   * - HTML tags (<strong>, <em>, <br/>, etc.)
   * - Paragraph breaks (\n\n)
   */
  content: string;

  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * RichText - Renders text with HTML and paragraph breaks
 *
 * Automatically handles:
 * - HTML formatting (<strong>, <em>, etc.)
 * - Multiple paragraphs separated by \n\n
 * - Renders each paragraph as a <p> element (unless it's a list)
 * - Lists (<ul>, <ol>) are rendered as-is without wrapping
 *
 * Uso:
 * ```tsx
 * <RichText content={t.overview.content} />
 * ```
 */
export function RichText({ content, className = '' }: RichTextProps) {
  const paragraphs = content.split('\n\n');

  return (
    <>
      {paragraphs.map((paragraph, index) => {
        // Check if the paragraph is a list (starts with <ul> or <ol>)
        const trimmed = paragraph.trim();
        const isList = trimmed.startsWith('<ul>') || trimmed.startsWith('<ol>');

        if (isList) {
          // Render lists directly without wrapping in <p>
          return (
            <div
              key={index}
              className={className}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          );
        }

        // Render regular paragraphs
        return (
          <p
            key={index}
            className={className}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        );
      })}
    </>
  );
}
