import { Variants, Transition } from 'framer-motion'

/**
 * Animation utilities using Framer Motion
 * All animations respect prefers-reduced-motion
 */

// Base transition configs
export const transitions = {
  fast: { duration: 0.15, ease: [0.4, 0, 0.2, 1] } as Transition,
  normal: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } as Transition,
  slow: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } as Transition,
  spring: { type: 'spring', stiffness: 300, damping: 30 } as Transition,
}

// Fade animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: transitions.normal,
  },
}

export const fadeUp: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
}

export const fadeDown: Variants = {
  hidden: { 
    opacity: 0,
    y: -20,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
}

// Slide animations
export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0,
    x: -30,
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: transitions.normal,
  },
}

export const slideInRight: Variants = {
  hidden: { 
    opacity: 0,
    x: 30,
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: transitions.normal,
  },
}

// Scale animations
export const scaleOnHover = {
  scale: 1.05,
  transition: transitions.fast,
}

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: transitions.spring,
  },
}

// Stagger container for children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Stagger item (use with staggerContainer)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: transitions.normal,
  },
}

// Hero animations
export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// Floating animation for shapes
export const floating: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Card hover animations
export const cardHover = {
  y: -8,
  transition: transitions.fast,
}

export const cardLift: Variants = {
  rest: { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: { 
    y: -8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    transition: transitions.fast,
  },
}

// Scroll reveal animation
export const scrollReveal: Variants = {
  hidden: { 
    opacity: 0,
    y: 50,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// Route transition
export const routeTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: transitions.normal,
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: transitions.fast,
  },
}

// Magnetic hover effect (for buttons/CTAs)
export const magneticHover = {
  scale: 1.05,
  x: 0,
  y: 0,
  transition: transitions.fast,
}

// Bobbing animation for floating CTA
export const bobbing: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Gradient border reveal
export const gradientBorderReveal: Variants = {
  hidden: { 
    backgroundPosition: '0% 50%',
  },
  visible: { 
    backgroundPosition: '100% 50%',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

