import { AnchorHTMLAttributes, forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, MotionProps } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import styles from './BlockLink.module.css';

/**
 * BlockLink Component - A structured link with title, description, and icon
 * Perfect for contact links, resource links, or any link list with descriptions
 *
 * Usage:
 *   <BlockLink href="mailto:..." title="Email" description="Get in touch" />
 *   <BlockLink href="https://..." external title="LinkedIn" description="Connect with me" />
 */

// Create motion variants
const MotionAnchor = motion.a;
const MotionRouterLink = motion.create(RouterLink);

export interface BlockLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'title'>, MotionProps {
  href: string;
  title: string;
  description: string;
  external?: boolean;
  className?: string;
}

export const BlockLink = forwardRef<HTMLAnchorElement, BlockLinkProps>(function BlockLink(
  {
    href,
    title,
    description,
    external = false,
    className = '',
    // Extract motion props
    initial,
    animate,
    exit,
    whileHover,
    whileTap,
    whileFocus,
    whileInView,
    transition,
    variants,
    ...props
  },
  ref
) {
  const classes = [styles.blockLink, className].filter(Boolean).join(' ');

  // Collect motion props
  const motionProps = {
    initial,
    animate,
    exit,
    whileHover,
    whileTap,
    whileFocus,
    whileInView,
    transition,
    variants,
  };

  // Content structure
  const content = (
    <>
      <div>
        <div className={styles.blockLinkTitle}>{title}</div>
        <div className={styles.blockLinkDescription}>{description}</div>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={styles.blockLinkIcon}
      >
        <ArrowUpRight size={16} />
      </motion.div>
    </>
  );

  // External links or special protocols
  if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <MotionAnchor
        ref={ref}
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...motionProps}
        {...props}
      >
        {content}
      </MotionAnchor>
    );
  }

  // Internal links with React Router
  return (
    <MotionRouterLink
      ref={ref}
      to={href}
      className={classes}
      {...motionProps}
      {...props}
    >
      {content}
    </MotionRouterLink>
  );
});
