export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const slam = {
  initial: { opacity: 0, x: -200, rotate: -5 },
  animate: { opacity: 1, x: 0, rotate: 0 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const scaleIn = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { type: "spring", stiffness: 400, damping: 15 },
};

export const cardHover = {
  rest: { scale: 1, rotateY: 0 },
  hover: { scale: 1.04, rotateY: 3, transition: { duration: 0.2 } },
};

export const barFill = (targetPercent: number) => ({
  initial: { width: "0%" },
  animate: { width: `${targetPercent}%` },
  transition: { duration: 1.2, ease: "easeOut", delay: 0.3 },
});
