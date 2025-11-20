import styles from './TokenPyramid.module.css';

/**
 * TokenPyramid - Visual diagram showing token hierarchy
 *
 * Shows the three-tier token structure:
 * - Component Tokens (top)
 * - Semantic Tokens (middle)
 * - Primitive Tokens (base)
 */
export function TokenPyramid() {
  return (
    <div className={styles.pyramidContainer}>
      <div className={styles.pyramid}>
        {/* SVG Pyramid Shape */}
        <svg
          className={styles.pyramidSvg}
          viewBox="0 0 800 500"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Top tier - Trapezoid */}
          <path
            d="M 250 0 L 550 0 L 650 150 L 150 150 Z"
            fill="var(--color-bg-primary)"
            stroke="var(--color-text-primary)"
            strokeWidth="2"
          />

          {/* Middle tier - Rectangle */}
          <rect
            x="150"
            y="150"
            width="500"
            height="150"
            fill="var(--color-bg-primary)"
            stroke="var(--color-text-primary)"
            strokeWidth="2"
          />

          {/* Bottom tier - Rectangle */}
          <rect
            x="150"
            y="300"
            width="500"
            height="200"
            fill="var(--color-bg-primary)"
            stroke="var(--color-text-primary)"
            strokeWidth="2"
          />
        </svg>

        {/* Text overlays */}
        <div className={`${styles.textOverlay} ${styles.topTier}`}>
          <div className={styles.tierLabel}>COMPONENT TOKENS</div>
          <div className={styles.tierSubtext}>button-primary-bg, input-border</div>
        </div>

        <div className={`${styles.textOverlay} ${styles.middleTier}`}>
          <div className={styles.tierLabel}>SEMANTIC TOKENS</div>
          <div className={styles.tierSubtext}>background, foreground, border, accent</div>
        </div>

        <div className={`${styles.textOverlay} ${styles.bottomTier}`}>
          <div className={styles.tierLabel}>PRIMITIVE TOKENS</div>
          <div className={styles.tierSubtext}>blue-500, gray-900, spacing-4, radius-md</div>
        </div>
      </div>

      <div className={styles.arrows}>
        <div className={styles.arrow}>↑</div>
        <div className={styles.arrowLabel}>Referencias hacia abajo</div>
      </div>
    </div>
  );
}
