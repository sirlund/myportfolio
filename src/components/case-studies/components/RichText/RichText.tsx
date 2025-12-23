import styles from './RichText.module.css';

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

  centered?: boolean;
}

/**
 * RichText - Renders text with HTML and paragraph breaks
 */
export function RichText({
  content,
  className = '',
  centered = false,
}: RichTextProps) {
  const blocks = content.split('\n\n');

  return (
    <div className={`${styles.richText} ${className}`}>
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // 1. Check if the block is already HTML list
        const isHtmlList = /^<(ul|ol)>/.test(trimmed);
        if (isHtmlList) {
          return (
            <div
              key={index}
              className={`${styles.htmlBlock} ${centered ? styles.centered : ''}`}
              dangerouslySetInnerHTML={{ __html: trimmed }}
            />
          );
        }

        // 2. Complex block parsing: handle mixed text and bulleted items
        const rawLines = block.split('\n');
        const elements: React.ReactNode[] = [];
        let currentList: string[] = [];

        const flushList = (keySuffix: string) => {
          if (currentList.length > 0) {
            elements.push(
              <ul
                key={`list-${keySuffix}`}
                className={`${styles.list} ${centered ? styles.listCentered : ''}`}
              >
                {currentList.map((item, i) => (
                  <li key={i} className={styles.listItem} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            );
            currentList = [];
          }
        };

        let currentParagraphLines: string[] = [];
        const flushParagraph = (keySuffix: string) => {
          if (currentParagraphLines.length > 0) {
            elements.push(
              <p
                key={`p-${keySuffix}`}
                className={`${styles.paragraph} ${centered ? styles.centered : ''}`}
                dangerouslySetInnerHTML={{ __html: currentParagraphLines.join('<br/>') }}
              />
            );
            currentParagraphLines = [];
          }
        };

        rawLines.forEach((line, lineIdx) => {
          const trimmedLine = line.trim();
          const isBullet = /^[•\-*]\s?/.test(trimmedLine);

          if (isBullet) {
            flushParagraph(`${index}-${lineIdx}`);
            const content = trimmedLine.replace(/^[•\-*]\s?/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            currentList.push(content);
          } else {
            flushList(`${index}-${lineIdx}`);
            if (trimmedLine || currentParagraphLines.length > 0) {
              const formattedLine = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              currentParagraphLines.push(formattedLine);
            }
          }
        });

        flushList(`${index}-end`);
        flushParagraph(`${index}-end`);

        return <div key={index}>{elements}</div>;
      })}
    </div>
  );
}
