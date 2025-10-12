import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import '../../styles/CustomCursor.css';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)) ||
        window.matchMedia('(hover: none)').matches;
      setIsMobile(isMobileDevice);
      
      // On mobile, don't hide the default cursor
      if (isMobileDevice) {
        document.body.style.cursor = '';
        document.documentElement.style.cursor = '';
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Don't set up cursor on mobile
    if (isMobile) {
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('a, button, [role="button"], input, textarea, select, [data-testid], [tabindex="0"]') ||
        target.closest('a, button, [role="button"], input, textarea, select, [data-testid], [tabindex="0"]');
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners to document
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Hide default cursor immediately
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isVisible, isMobile]);

  // Don't render cursor on mobile
  if (isMobile || !isVisible) return null;

  const size = isHovering ? 48 : 32; // 20% smaller base size (40px -> 32px), larger on hover (48px)
  const offset = size / 2;

  return (
    <motion.div
      className="custom-cursor"
      style={{
        left: mousePosition.x - offset,
        top: mousePosition.y - offset,
        width: size,
        height: size,
        backgroundColor: isHovering ? 'rgba(0, 0, 0, 0.3)' : 'white',
        mixBlendMode: isHovering ? 'normal' : 'difference',
      }}
      animate={{
        scale: isHovering ? [1, 1.1, 1] : [1, 1.05, 1],
        width: size,
        height: size,
      }}
      transition={{
        scale: {
          duration: isHovering ? 0.8 : 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        },
        width: {
          type: "spring",
          stiffness: 200,
          damping: 25
        },
        height: {
          type: "spring", 
          stiffness: 200,
          damping: 25
        }
      }}
    />
  );
}