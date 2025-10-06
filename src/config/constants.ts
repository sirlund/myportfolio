// Application-wide constants

// Site configuration
export const SITE = {
  NAME: 'Nicolás Lundin',
  TITLE: 'Senior Product Designer',
  LOCATION: 'Santiago, Chile',
  TAGLINE: 'A Senior Product Designer from Santiago, Chile –– creating user-friendly solutions for digital products.',
} as const;

// Contact information
export const CONTACT = {
  EMAIL: 'hola@nlund.in',
  LINKEDIN: 'https://linkedin.com/in/nicolaslundin',
  DRIBBBLE: 'https://dribbble.com/sirlund',
  RESUME: '#', // Update with actual resume URL
} as const;

// About section content
export const ABOUT = {
  DESCRIPTION: [
    "I'm a Senior Product Designer from Santiago, Chile, with extensive experience creating user-friendly solutions for digital products. I specialize in design systems, fintech, and transforming complex processes into intuitive experiences.",
    "My approach focuses on systematic design thinking and cross-functional collaboration. I excel at building scalable design systems from inception and leading design teams to deliver consistent, high-quality user experiences.",
    "Throughout my career, I've worked across diverse industries including AI platforms, cryptocurrency, cannabis tech, financial services, and insurtech. I'm passionate about making complex technologies accessible and user-friendly.",
    "I believe in the power of design systems to scale quality and consistency, and I'm always looking for opportunities to mentor other designers and share knowledge within the design community."
  ],
  TOOLS: ['Figma', 'Sketch', 'Principle', 'Adobe Creative Suite'],
  SKILLS: ['User Research', 'Information Architecture', 'Interaction Design', 'Design Systems'],
  INDUSTRIES: ['AI & Machine Learning', 'Fintech & Crypto', 'Insurtech', 'Financial Services'],
} as const;

// Contact section content
export const CONTACT_SECTION = {
  TITLE: "Let's Connect",
  DESCRIPTION: "I'm always interested in discussing new opportunities, especially those involving design systems, fintech, or complex product challenges. Feel free to reach out if you'd like to work together or just want to chat about design.",
  LINKS: [
    {
      name: 'Email',
      href: `mailto:${CONTACT.EMAIL}`,
      description: CONTACT.EMAIL,
    },
    {
      name: 'LinkedIn',
      target: '_blank' as const,
      rel: 'noopener noreferrer',
      href: CONTACT.LINKEDIN,
      description: 'Connect with me',
    },
    {
      name: 'Dribbble',
      target: '_blank' as const,
      rel: 'noopener noreferrer',
      href: CONTACT.DRIBBBLE,
      description: 'View my work',
    },
    {
      name: 'Resume',
      href: CONTACT.RESUME,
      description: 'Download PDF',
    },
  ],
} as const;

// Base path configuration
export const BASE_PATH = '/';

// Layout constants
export const LAYOUT = {
  HEADER_HEIGHT: 80,
  SCROLL_OFFSET: 100,
  FOOTER_HEIGHT: 200,
} as const;

// Animation durations (in milliseconds)
export const ANIMATION = {
  SCROLL_DURATION: 800,
  TRANSITION_DURATION: 300,
  DEBOUNCE_DELAY: 150,
} as const;

// Navigation sections on the home page
export const NAV_SECTIONS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

// Error messages
export const ERROR_MESSAGES = {
  NAVIGATION_FAILED: 'Navigation failed',
  ROUTE_NOT_FOUND: 'Route not found',
  UNEXPECTED_ERROR: 'An unexpected error occurred',
} as const;

// Scroll behavior options
export const SCROLL_OPTIONS: ScrollIntoViewOptions = {
  behavior: 'smooth',
  block: 'start',
};
