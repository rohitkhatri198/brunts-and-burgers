import { Variants } from "framer-motion";

export const transformY: Variants = {
  initial: {
    y: -1000,
  },
  animate: {
    y: 0,

    transition: {
      delay: 1.4,
      duration: 0.8,
      type: "spring",
      ease: "linear",
    },
  },
};
export const hover: Variants = {
  initial: {},
  animate: {
    y: [20, 0, 20],
    transition: {
      duration: 1.6,
      ease: "linear",
      repeat: Infinity,
    },
  },
};
export const slide: Variants = {
  initial: {
    x: -1000,
    top: -1000,
  },
  animate: {
    x: 0,
    top: 0,

    transition: {
      delay: 0.5,
      duration: 0.8,
      type: "spring",

      ease: "linear",
    },
  },
};
export const slideRight: Variants = {
  initial: {
    x: 1000,
  },
  animate: {
    x: 0,

    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: "linear",
      type: "spring",
    },
  },
};
// export const animate: Variants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: [0, 100],

//     transition: {
//       delay: 2,
//       duration: 1.5,
//       ease: "easeOut",
//       repeat:Infinity,
//     },
//   },
// };
