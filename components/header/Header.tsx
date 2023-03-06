import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { arrow, iconShape } from "../../assets/background";
import iconBook from "../../assets/icons/iconBook.svg";
import styles from "./Header.module.scss";
import { Navlist } from "./navlist/Navlist";
import Link from "next/link";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { INavlist } from "../../utils/types";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { onClickLink } from "../../utils/funcUtils";

export const Header = ({ setIsOpen, close }: INavlist): JSX.Element => {
  const { scroll } = useLocomotiveScroll();
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const onClickLinkTab = (): void => {
    onClickLink(".main-cont", scroll, 0, setIsOpen, close);
  };

  useLayoutEffect(() => {
    let element: any = ref.current;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top",
          end: 99999,
          scroller: ".main-cont",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
        height: "",
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();
    return () => {
      t1.kill();
      // (ScrollTrigger as any).kill();
    };
  }, []);

  return (
    <div className={styles.header} id="Header" ref={ref}>
      <Link onClick={onClickLinkTab} href={"/"}>
        <Image priority={false} src={iconShape} alt={""} className={styles.icon} />
      </Link>
      <div className={styles.containerNavlist}>
        <Navlist />
      </div>
      <a href={"https://calendly.com/monophora/30min"} target={"_blank"} className={styles.buttonWrite} rel="noreferrer">
        <Image src={iconBook} alt="" /> Book a call <Image src={arrow} alt={""} className={styles.arrow} />
      </a>
    </div>
  );
};
