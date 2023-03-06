import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const onClickLink = (id: string, scroll: any, duration: number, setIsOpen?: any, close?: any): void => {
  handleScroll(id, scroll, duration);
  if (setIsOpen) {
    if (close) {
      close();
    }
  }
};

export const handleScroll = (id: any, scroll: any, duration: number) => {
  let elem = document.querySelector(`${id}`);
  scroll.scrollTo(elem, {
    offset: "0",
    duration: `${duration}`,
    easing: [0.5, 0.1, 0.4, 1],
    disableLerp: duration === 0 ? true : false,
  });
};

export const gsapOpacity = (t1: any, element1: HTMLElement, element2: HTMLElement, element3: HTMLElement) => {
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
        start: "bottom-=100 bottom",
        scroller: ".main-cont",
        pin: false,
        markers: false,
        scrub: true,
      },
      opacity: 0.3,
    });

    t1.to(element3, {
      scrollTrigger: {
        trigger: element3,
        start: "bottom-=20% bottom",
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
