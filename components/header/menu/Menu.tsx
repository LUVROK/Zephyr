import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import { callIcon, menuIcon } from "../../../assets/icons";
import styles from "./Menu.module.scss";
import { ModalHeader } from "./modalHeader/ModalHeader";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const Menu = (): JSX.Element => {
  const [isOpenHeader, setOpenHeader] = useState(false);

  const refCR = useRef(null);
  const isInView1 = useInView(refCR);
  const [flag1, setFlag1] = useState(false);

  useEffect(() => {
    if (isInView1) {
      setFlag1(true);
    } else {
      setFlag1(false);
    }
  }, [isInView1]);

  useLayoutEffect(() => {
    let element: any = refCR.current;
    let t1 = gsap.timeline();

    if (element) {
      setTimeout(() => {
        t1.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "bottom+=25 bottom",
            end: 99999,
            scroller: ".main-cont",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            markers: false,
          },
          ease: "none",
        });
        ScrollTrigger.refresh();
      }, 1000);
      ScrollTrigger.refresh();
      return () => {
        t1.kill();
        // (ScrollTrigger as any).kill();
      };
    }
  }, []);

  return (
    <div>
      <div className={styles.container} style={flag1 ? { opacity: 1 } : { opacity: 0 }} ref={refCR}>
        {isOpenHeader && <ModalHeader setIsOpen={setOpenHeader} isOpen={isOpenHeader} />}
        <button
          onClick={(): void => {
            setOpenHeader(true);
          }}
          className={styles.menu}
        >
          Menu <Image src={menuIcon} alt={""} />
        </button>
        <a href={"https://calendly.com/monophora/30min"} target={"_blank"} className={styles.call} rel="noreferrer">
          Book a call <Image src={callIcon} alt={""} />
        </a>
      </div>
    </div>
  );
};
