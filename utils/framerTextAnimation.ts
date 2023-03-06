import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const textAnimation = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom, duration: 0.5, ease: "easeInOut" },
  }),
};

export const textAnimationCustom = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom, duration: 0.5, ease: "easeInOut" },
  }),
};

export const ImgAnimation = {
  hidden: {
    y: -250,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom, duration: 1, ease: "easeInOut" },
  }),
};

export const buttonAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom, duration: 1, ease: "easeInOut" },
  }),
};

export const container = {
  hidden: {
    scale: 0.75,
    opacity: 0,
  },
  visible: (custom: number) => ({
    transition: {
      delay: custom,
      duration: 2,
      ease: "easeInOut",
      type: "spring",
      bounce: 0.7,
    },
    scale: 1,
    opacity: 1,
  }),
};

export const triggerOpacity = (t1: any, element1: any, element2: any) => {
  setTimeout(() => {
    t1.to(element1, {
      scrollTrigger: {
        trigger: element1,
        start: "center center",
        scroller: ".main-cont",
        pin: false,
        markers: false,
        scrub: true,
      },
      opacity: 0.3,
    });

    t1.to(element2, {
      scrollTrigger: {
        trigger: element2,
        start: "bottom-=800 bottom",
        scroller: ".main-cont",
        pin: false,
        markers: false,
        scrub: true,
      },
      opacity: 0.3,
    });
    ScrollTrigger.refresh();
  }, 1000);
};

export const triggerOpacityOne = (t1: any, element1: any, start: string) => {
  setTimeout(() => {
    t1.to(element1, {
      scrollTrigger: {
        trigger: element1,
        start: start,
        scroller: ".main-cont",
        pin: false,
        markers: false,
        scrub: true,
      },
      opacity: 0.3,
    });
    ScrollTrigger.refresh();
  }, 1000);
};

export const damping = {
  visible: {
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0,
    },
  },
  hidden: {
    rotate: -55,
    transition: {
      type: "spring",
      duration: 1,
      stiffness: 100,
      delay: 0,
    },
  },
};

export const pathCheckVariants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const transform_from_left = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom, duration: 0.35, ease: "easeInOut" },
  }),
};

export const transform_from_right = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom, duration: 0.7, ease: "easeInOut" },
  }),
};

export const svgAnim = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom, duration: 0.7, ease: "easeInOut" },
  }),
};
