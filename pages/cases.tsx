import React, { useRef, useLayoutEffect } from "react";
import styles from "../styles/index.module.scss";
import { WriteUs } from "../components";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { onClickLink } from "../utils/funcUtils";
import { motion } from "framer-motion";
import Image from "next/image";
import { caseButtonIcon1, caseButtonIcon2, caseButtonIcon3, caseButtonIcon4 } from "../assets/icons";
import { tx, sberclass, chess, innopolis } from "../assets/image/index";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { transform_from_left, transform_from_right } from "../utils/framerTextAnimation";
import stylesCases from "../components/cases/Cases.module.scss";
import { triggerOpacityOne } from "../utils/framerTextAnimation";
import classNames from "classnames";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,import/no-default-export
export default function Cases() {
  const { scroll } = useLocomotiveScroll();
  const ScrollingRef = useRef(null);
  const ref = useRef(null);
  const op1 = useRef(null);
  const op2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  // React.useEffect(() => {
  //   ScrollTrigger.refresh();
  // }, []);

  useLayoutEffect(() => {
    let element1: any = op1.current;

    let element: any = ref.current;
    let scrollingElement: any = ScrollingRef.current;

    let pinWrapWidth =
      window.innerWidth >= 1080 ? scrollingElement.scrollWidth - window.innerWidth / 2 : scrollingElement.scrollWidth + 500;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element1, {
        scrollTrigger: {
          trigger: element1,
          start: `${pinWrapWidth - 100} bottom`,
          end: `${pinWrapWidth + 500} bottom`,
          scroller: ".main-cont",
          pin: false,
          markers: false,
          scrub: true,
        },
        opacity: 0.3,
      });

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

    console.log(pinWrapWidth);
    return () => {
      t1.kill();
      // (ScrollTrigger as any).kill();
    };
  }, []);

  const ViewCASES1 = useRef(null);
  const ViewCASES2 = useRef(null);
  const ViewCASES3 = useRef(null);
  const ViewCASES4 = useRef(null);

  const onClickLinkTab = (): void => {
    onClickLink(".main-cont", scroll, 0);
  };

  return (
    <div className={styles.containerBackground} style={{ background: "#FFFFFF" }}>
      <div className={styles.container}>
        <div className={styles.parallaxContainer}>
          <div
            className={styles.casesPageScroll}
            style={{ background: "#FFFFFF", borderRadius: "0px" }}
            ref={ref}
            id="fixed-target"
          >
            <div
              className={styles.opacitystlCases}
              ref={op1}
              style={{ background: `rgba(0,0,0,1)`, opacity: 0, borderRadius: "0px" }}
            ></div>
            <h1>Cases</h1>
            <div className={stylesCases.projects} ref={ScrollingRef}>
              <div className={classNames(stylesCases.project, stylesCases.casesPage__project)} ref={ViewCASES1}>
                <div className={stylesCases.blockTitle} style={{ background: "#A6AFEA" }}>
                  <motion.div
                    className={stylesCases.blockTitleTops}
                    initial="hidden"
                    whileInView="visible"
                    variants={transform_from_left}
                    custom={0.2}
                  >
                    <div className={stylesCases.blockTitleTop}>
                      <h3 className={stylesCases.titleCard}>Tx.mobile</h3>
                      <p className={stylesCases.text}>How we improve UX in Tx.Mobile</p>
                      <button className={stylesCases.button} style={{ color: "#A6AFEA" }}>
                        <Link onClick={onClickLinkTab} href={"/Tx-mobile"}>
                          Read a case study <Image src={caseButtonIcon1} alt={""} />
                        </Link>
                      </button>
                    </div>
                  </motion.div>
                  <div className={stylesCases.buttons}>
                    <motion.button
                      className={stylesCases.blockButton}
                      initial="hidden"
                      whileInView="visible"
                      variants={transform_from_left}
                      custom={0.3}
                    >
                      3 mo ready
                    </motion.button>
                    <motion.button
                      className={stylesCases.blockButton}
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
                  className={stylesCases.blockScroll}
                  initial="hidden"
                  whileInView="visible"
                  variants={transform_from_right}
                  custom={0.5}
                >
                  <Image className={stylesCases.image} src={tx} alt={""} />
                </motion.div>
              </div>
              <div className={classNames(stylesCases.project, stylesCases.casesPage__project)} ref={ViewCASES2}>
                <div className={stylesCases.blockTitle} style={{ background: "#F1DBB4" }}>
                  <motion.div
                    className={stylesCases.blockTitleTops}
                    initial="hidden"
                    whileInView="visible"
                    variants={transform_from_left}
                    custom={0.2}
                  >
                    <div className={stylesCases.blockTitleTop}>
                      <h3 className={stylesCases.titleCard}>Chess.pro</h3>
                      <p className={stylesCases.text}>How we build top 10 chess application</p>
                      <button className={stylesCases.button} style={{ color: "#F1DBB4" }}>
                        <Link onClick={onClickLinkTab} href={"/Chess-pro"}>
                          Read a case study <Image src={caseButtonIcon2} alt={""} />
                        </Link>
                      </button>
                    </div>
                  </motion.div>
                  <div className={stylesCases.buttons}>
                    <motion.button
                      className={stylesCases.blockButton}
                      initial="hidden"
                      whileInView="visible"
                      variants={transform_from_left}
                      custom={0.3}
                    >
                      3 mo ready
                    </motion.button>
                    <motion.button
                      className={stylesCases.blockButton}
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
                  className={stylesCases.blockScroll}
                  initial="hidden"
                  whileInView="visible"
                  variants={transform_from_right}
                  custom={0.5}
                >
                  <Image className={stylesCases.image} src={chess} alt={""} />
                </motion.div>
              </div>
              <div className={classNames(stylesCases.project, stylesCases.casesPage__project)} ref={ViewCASES3}>
                <div className={stylesCases.blockTitle} style={{ background: "#C4DAE7" }}>
                  <motion.div
                    className={stylesCases.blockTitleTops}
                    initial="hidden"
                    whileInView="visible"
                    variants={transform_from_left}
                    custom={0.2}
                  >
                    <div className={stylesCases.blockTitleTop}>
                      <h3 className={stylesCases.titleCard}>Innopolis | Club</h3>
                      <p className={stylesCases.text}>Design and development Innopolis platform</p>
                      <button className={stylesCases.button} style={{ color: "#C4DAE7" }}>
                        <Link onClick={onClickLinkTab} href={"/Innopolis"}>
                          Read a case study <Image src={caseButtonIcon3} alt={""} />
                        </Link>
                      </button>
                    </div>
                  </motion.div>
                  <div className={stylesCases.buttons}>
                    <motion.button
                      className={stylesCases.blockButton}
                      initial="hidden"
                      whileInView="visible"
                      variants={transform_from_left}
                      custom={0.3}
                    >
                      3 mo ready
                    </motion.button>
                    <motion.button
                      className={stylesCases.blockButton}
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
                  className={stylesCases.blockScroll}
                  initial="hidden"
                  whileInView="visible"
                  variants={transform_from_right}
                  custom={0.5}
                >
                  <Image className={stylesCases.image} src={innopolis} alt={""} />
                </motion.div>
              </div>
              <div className={classNames(stylesCases.project, stylesCases.casesPage__project)} ref={ViewCASES4}>
                <div className={stylesCases.blockTitle} style={{ background: "#CEC7F9" }}>
                  <motion.div
                    className={stylesCases.blockTitleTops}
                    initial="hidden"
                    whileInView="visible"
                    variants={transform_from_left}
                    custom={0.2}
                  >
                    <div className={stylesCases.blockTitleTop}>
                      <h3 className={stylesCases.titleCard}>Sberclass</h3>
                      <p className={stylesCases.text}>How we build new digital platform for schools</p>
                      <button className={stylesCases.button} style={{ color: "#CEC7F9" }}>
                        <Link onClick={onClickLinkTab} href={"/Sberclass"}>
                          Read a case study <Image src={caseButtonIcon4} alt={""} />
                        </Link>
                      </button>
                    </div>
                  </motion.div>
                  <div className={stylesCases.buttons}>
                    <motion.button
                      className={stylesCases.blockButton}
                      initial="hidden"
                      whileInView="visible"
                      variants={transform_from_left}
                      custom={0.3}
                    >
                      3 mo ready
                    </motion.button>
                    <motion.button
                      className={stylesCases.blockButton}
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
                  className={stylesCases.blockScroll}
                  initial="hidden"
                  whileInView="visible"
                  variants={transform_from_right}
                  custom={0.5}
                >
                  <Image className={stylesCases.image} src={sberclass} alt={""} />
                </motion.div>
              </div>
            </div>
          </div>
          <div
            className={styles.WriteUs}
            ref={op2}
            style={{
              position: "relative",
              zIndex: 9999,
            }}
          >
            <WriteUs />
          </div>
        </div>
      </div>
    </div>
  );
}
