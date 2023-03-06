import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { caseButtonIcon1, caseButtonIcon2, caseButtonIcon3, caseButtonIcon4 } from "../../assets/icons";
import { tx, sberclass, chess, innopolis } from "../../assets/image/index";
import styles from "./Cases.module.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { onClickLink } from "../../utils/funcUtils";
import { textAnimation } from "../../utils/framerTextAnimation";

export const Cases = ({
  opacity,
  setIsOpen,
  close,
}: {
  opacity: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  close?: () => void;
}): JSX.Element => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const { scroll } = useLocomotiveScroll();

  const ScrollingRef = useRef(null);

  const onClickLinkTab = (): void => {
    onClickLink(".main-cont", scroll, 0, setIsOpen, close);
  };

  useLayoutEffect(() => {
    let element: any = ref.current;
    let scrollingElement: any = ScrollingRef.current;
    let pinWrapWidth =
      window.innerWidth >= 1080 ? scrollingElement.scrollWidth - window.innerWidth / 2 : scrollingElement.scrollWidth + 500;
    let pinscrollWidth =
      window.innerWidth >= 1080 ? scrollingElement.scrollWidth : scrollingElement.scrollWidth + window.innerHeight;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".main-cont",
          scrub: 1,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".main-cont",
          scrub: 1,
        },
        x: -pinWrapWidth,

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

  const ViewCASES1 = useRef(null);
  const ViewCASES2 = useRef(null);
  const ViewCASES3 = useRef(null);
  const ViewCASES4 = useRef(null);

  const transform_from_left = {
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

  const transform_from_right = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom, duration: 0.7, ease: "easeInOut" },
    }),
  };

  return (
    <div className={styles.container} ref={ref} id="fixed-target">
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.overlay2}></div>
      <div className={styles.overlay3} style={{ background: `${opacity}` }}></div>
      {/* <div> */}
      <motion.h3
        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
        custom={0.25}
        className={styles.titleBlock}
        // data-scroll
        // data-scroll-speed="-2"
        // data-scroll-direction="horizontal"
      >
        Cases
      </motion.h3>
      <motion.p className={styles.casesText} initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
        We create and develop digital products: from research and strategy to design and high-load development. Below are the
        best projects created with our help:
      </motion.p>
      <div className={styles.projects} ref={ScrollingRef}>
        <div className={styles.project} ref={ViewCASES1}>
          <div className={styles.blockTitle} style={{ background: "#A6AFEA" }}>
            <motion.div
              className={styles.blockTitleTops}
              initial="hidden"
              whileInView="visible"
              variants={transform_from_left}
              custom={0.3}
            >
              <div className={styles.blockTitleTop}>
                <h3 className={styles.titleCard}>Tx.mobile</h3>
                <p className={styles.text}>How we improve UX in Tx.Mobile</p>
                <button className={styles.button} style={{ color: "#A6AFEA" }}>
                  <Link onClick={onClickLinkTab} href={"/Tx-mobile"}>
                    Read a case study <Image src={caseButtonIcon1} alt={""} />
                  </Link>
                </button>
              </div>
            </motion.div>
            <div className={styles.buttons}>
              <motion.button
                className={styles.blockButton}
                initial="hidden"
                whileInView="visible"
                variants={transform_from_left}
                custom={0.35}
              >
                3 mo ready
              </motion.button>
              <motion.button
                className={styles.blockButton}
                initial="hidden"
                whileInView="visible"
                variants={transform_from_left}
                custom={0.4}
              >
                2x LTV
              </motion.button>
            </div>
          </div>
          <motion.div
            className={styles.blockScroll}
            initial="hidden"
            whileInView="visible"
            variants={transform_from_right}
            custom={0.45}
          >
            {/* <div> */}
            <Image className={styles.image} src={tx} alt={""} />
            {/* <Image className={styles.imageMobile} src={clubMobile} alt={""} /> */}
            {/* </div> */}
          </motion.div>
        </div>
        <div className={styles.project} ref={ViewCASES2}>
          <div className={styles.blockTitle} style={{ background: "#F1DBB4" }}>
            <motion.div
              className={styles.blockTitleTops}
              initial="hidden"
              whileInView="visible"
              variants={transform_from_left}
              custom={0.3}
            >
              <div className={styles.blockTitleTop}>
                <h3 className={styles.titleCard}>Chess.pro</h3>
                <p className={styles.text}>How we build top 10 chess application</p>
                <button className={styles.button} style={{ color: "#F1DBB4" }}>
                  <Link onClick={onClickLinkTab} href={"/Chess-pro"}>
                    Read a case study <Image src={caseButtonIcon2} alt={""} />
                  </Link>
                </button>
              </div>
            </motion.div>
            <div className={styles.buttons}>
              <motion.button
                className={styles.blockButton}
                initial="hidden"
                whileInView="visible"
                variants={transform_from_left}
                custom={0.35}
              >
                3 mo ready
              </motion.button>
              <motion.button
                className={styles.blockButton}
                initial="hidden"
                whileInView="visible"
                variants={transform_from_left}
                custom={0.4}
              >
                2x LTV
              </motion.button>
            </div>
          </div>
          <motion.div
            className={styles.blockScroll}
            initial="hidden"
            whileInView="visible"
            variants={transform_from_right}
            custom={0.5}
          >
            {" "}
            {/* <div> */}
            <Image className={styles.image} src={chess} alt={""} />
            {/* <Image className={styles.imageMobile} src={clubMobile} alt={""} /> */}
            {/* </div> */}
          </motion.div>
        </div>
        <div className={styles.project} ref={ViewCASES3}>
          <div className={styles.blockTitle} style={{ background: "#C4DAE7" }}>
            <motion.div
              className={styles.blockTitleTops}
              initial="hidden"
              whileInView="visible"
              variants={transform_from_left}
              custom={0.2}
            >
              <div className={styles.blockTitleTop}>
                <h3 className={styles.titleCard}>Innopolis | Club</h3>
                <p className={styles.text}>Design and development Innopolis platform</p>
                <button className={styles.button} style={{ color: "#C4DAE7" }}>
                  <Link onClick={onClickLinkTab} href={"/Innopolis"}>
                    Read a case study <Image src={caseButtonIcon3} alt={""} />
                  </Link>
                </button>
              </div>
            </motion.div>
            <div className={styles.buttons}>
              <motion.button
                className={styles.blockButton}
                initial="hidden"
                whileInView="visible"
                variants={transform_from_left}
                custom={0.35}
              >
                3 mo ready
              </motion.button>
              <motion.button
                className={styles.blockButton}
                initial="hidden"
                whileInView="visible"
                variants={transform_from_left}
                custom={0.4}
              >
                2x LTV
              </motion.button>
            </div>
          </div>
          <motion.div
            className={styles.blockScroll}
            initial="hidden"
            whileInView="visible"
            variants={transform_from_right}
            custom={0.5}
          >
            {" "}
            {/* <div> */}
            <Image className={styles.image} src={innopolis} alt={""} />
            {/* <Image className={styles.imageMobile} src={clubMobile} alt={""} /> */}
            {/* </div> */}
          </motion.div>
        </div>
        <div className={styles.project} ref={ViewCASES4}>
          <div className={styles.blockTitle} style={{ background: "#CEC7F9" }}>
            <motion.div
              className={styles.blockTitleTops}
              initial="hidden"
              whileInView="visible"
              variants={transform_from_left}
              custom={0.2}
            >
              {" "}
              <div className={styles.blockTitleTop}>
                <h3 className={styles.titleCard}>Sberclass</h3>
                <p className={styles.text}>How we build new digital platform for schools</p>
                <button className={styles.button} style={{ color: "#CEC7F9" }}>
                  <Link onClick={onClickLinkTab} href={"/Sberclass"}>
                    Read a case study <Image src={caseButtonIcon4} alt={""} />
                  </Link>
                </button>
              </div>
            </motion.div>
            <div className={styles.buttons}>
              <motion.button
                className={styles.blockButton}
                initial="hidden"
                whileInView="visible"
                variants={transform_from_left}
                custom={0.35}
              >
                3 mo ready
              </motion.button>
              <motion.button
                className={styles.blockButton}
                initial="hidden"
                whileInView="visible"
                variants={transform_from_left}
                custom={0.4}
              >
                2x LTV
              </motion.button>
            </div>
          </div>
          <motion.div
            className={styles.blockScroll}
            initial="hidden"
            whileInView="visible"
            variants={transform_from_right}
            custom={0.5}
          >
            {" "}
            {/* <div> */}
            <Image className={styles.image} src={sberclass} alt={""} />
            {/* <Image className={styles.imageMobile} src={clubMobile} alt={""} /> */}
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
