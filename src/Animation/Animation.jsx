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
