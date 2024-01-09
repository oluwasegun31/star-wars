// Variants for animated navigation menu
export const navbarVariant = {
  // Initial state: menu hidden off-screen
  initial: {
    x: -100,
    opacity: 0,
  },
  // Animated state: menu slides in smoothly
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  // Exit state: menu slides out quickly
  exit: {
    x: -100,
    opacity: 0,
    transition: {
      duration: 0.1,
      when: "afterChildren",
      staggerChildren: 0.04,
    },
  },
};
// Variants for animated navigation list items
export const navListVariant = {
  // Initial state: list items hidden off-screen
  initial: {
    x: 100,
    opacity: 0,
  },
  // Animated state: list items slide in
  animate: {
    x: 0,
    opacity: 1,
  },
  // Exit state: list items slide out
  exit: {
    x: 100,
    opacity: 0,
  },
};
// Animation variants for letter reveal
export const letterReveal = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { staggerChildren: 0.05, type: "spring" },
  },
};
// Animation variants for scaling and fading in
export const featuredReveal = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", duration: 0.5 },
  },
};
// Animation variants for letter reveal
export const letterReveal2 = {
  hidden: {
    x: 30,
    y: 40,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.05,
    },
  },
};
