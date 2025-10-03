import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import imgTl24 from "figma:asset/1ea56dc0450f32017fd843d2d38452e6a1fe772a.png";
import imgTl12 from "figma:asset/ff77b8dc65684693f8721fbd3dbfdaf812401f5e.png";
import imgTl5 from "figma:asset/4f578de95eb58c0b76d9e967452f4fa56aafd83f.png";
import { ThreeCanvas } from './ThreeCanvas';
import '../styles/Hero.css';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 50, y: 50 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  
  // Track cumulative positions for each shape
  const [shapePositions, setShapePositions] = useState({
    triangle: { x: 0, y: 0, rotation: 0 },
    star: { x: 0, y: 0, rotation: 0 },
    circle: { x: 0, y: 0, rotation: 0 }
  });
  
  const sectionRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      // Calculate mouse movement delta
      const deltaX = x - prevMousePosition.x;
      const deltaY = y - prevMousePosition.y;
      
      // Update cumulative positions for each shape with different sensitivities
      setShapePositions(prev => ({
        triangle: {
          x: prev.triangle.x + deltaX * 0.3,
          y: prev.triangle.y + deltaY * 0.2,
          rotation: prev.triangle.rotation + deltaX * 0.1
        },
        star: {
          x: prev.star.x + deltaX * -0.4,
          y: prev.star.y + deltaY * 0.3,
          rotation: prev.star.rotation + deltaX * -0.15
        },
        circle: {
          x: prev.circle.x + deltaX * 0.25,
          y: prev.circle.y + deltaY * -0.2,
          rotation: prev.circle.rotation + deltaY * 0.1
        }
      }));
      
      setPrevMousePosition({ x, y });
      setMousePosition({ x, y });
      setIsMouseMoving(true);

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set timeout to stop mouse movement detection
      timeoutRef.current = setTimeout(() => {
        setIsMouseMoving(false);
      }, 200);
    };

    const handleMouseLeave = () => {
      setIsMouseMoving(false);
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [prevMousePosition]);

  return (
        <section 
      ref={sectionRef}
      id="home" 
      className="hero-section"
    >
      <div className='canvas-container'>
        <ThreeCanvas />
      </div>

      {/* Main content */}
      <div className="hero-content-wrapper">
        <div className="hero-content-center">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hero-title"
              >
                Nicolás Lundin
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hero-description"
              >
                A Senior Product Designer from Santiago, Chile –– creating user-friendly solutions for digital products.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                onClick={scrollToWork}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="hero-button"
              >
                View Work
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hero-scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="32"
            viewBox="0 0 20 32"
            fill="none"
            className="hero-scroll-icon"
          >
            {/* Mouse body */}
            <rect 
              x="1" 
              y="1" 
              width="18" 
              height="26" 
              rx="9" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
            />
            {/* Scroll wheel */}
            <motion.rect 
              x="8.5" 
              y="6" 
              width="3" 
              height="6" 
              rx="1.5" 
              fill="currentColor"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Bottom indicator line */}
            <motion.line 
              x1="10" 
              y1="30" 
              x2="10" 
              y2="31" 
              stroke="currentColor" 
              strokeWidth="1.5"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}