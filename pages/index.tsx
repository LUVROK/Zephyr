import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { api, back, ui, ux, vectorTop, vectorY } from "../assets/background/index";
import { chess, core, writeUs, innopolis } from "../assets/icons/index";
import { Button, Cases, Services, WriteUs, AnimatedTextWord } from "../components";
import styles from "../styles/index.module.scss";
import { useAnimation } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { onClickLink, gsapOpacity } from "../utils/funcUtils";
import { damping, pathCheckVariants } from "../utils/framerTextAnimation";
import classNames from "classnames";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,import/no-default-export
export default function Home() {
  const { scroll } = useLocomotiveScroll();
  const controls = useAnimation();
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef<HTMLDivElement | null>(null);

  const wrapper1 = useRef(null);
  const wrapper2 = useRef(null);
  const wrapper3 = useRef(null);

  const container = {
    hidden: { opacity: 0 },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    visible: (i: number = 1) => ({
      opacity: 1,
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.24 * i,
      },
    }),
  };

  useEffect(() => {
    controls.start({
      pathLength: [0, 1, 0],
      transition: {
        duration: 14,
        ease: "easeInOut",
        loop: Infinity,
        repeat: Infinity,
        repeatDelay: 0,
      },
    });
  }, [controls]);

  const op1 = useRef(null);
  const op2 = useRef(null);
  const op2Lol = useRef(null);
  const op3 = useRef(null);

  useLayoutEffect(() => {
    let element1: any = op1.current;
    let element2: any = op2.current;
    let elementop2Lol: any = op2Lol.current;
    let element3: any = op3.current;

    let t1 = gsap.timeline();

    // gsapOpacity(t1, element1, element2, element3);

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
          start: "bottom bottom",
          end: "bottom+=1000 bottom",
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

    ScrollTrigger.refresh();
    return () => {
      t1.kill();
      // (ScrollTrigger as any).kill();
    };
  }, []);

  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <div className={styles.containerBackground} style={Loaded ? { overflow: "hidden" } : { overflow: "auto" }}>
      <div className={styles.container} ref={ref}>
        <div className={styles.backgroundImageCont}>
          <motion.svg width="959" height="697" viewBox="0 0 959 697" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M266.337 -122.199C347.381 -239.616 518.31 -404.001 597.88 -316.545C677.45 -229.089 498.417 -37.172 398.954 47.8545C498.417 -29.0743 721.656 -156.209 818.909 -49.3187C916.161 57.5718 712.078 173.37 597.88 217.908C682.608 165.272 869.745 79.4358 940.474 157.174C1011.2 234.913 852.063 359.619 763.651 412.254C829.96 456.792 933.843 570.16 818.909 667.334C703.974 764.507 645.769 586.356 631.034 485.134C579.461 545.867 454.211 645.47 365.8 558.014C277.389 470.558 417.373 343.423 498.417 290.787C424.741 343.423 233.183 460.841 144.772 315.081C56.3601 169.321 240.55 84.2945 332.646 84.2945C225.815 100.49 -7.73817 84.2945 1.10297 -12.8787C9.94411 -110.052 192.661 -134.345 266.337 -122.199Z"
              stroke="#4A4A4A"
              pathLength={1}
              animate={controls}
            />
          </motion.svg>
        </div>
        <div className={styles.parallaxContainer}>
          <div className={styles.top} ref={wrapper1} data-scroll data-scroll-position="top" data-scroll-speed="-5">
            <div className={styles.opacitystl} ref={op1} style={{ background: `rgba(0,0,0,1)`, opacity: 0 }}></div>
            <motion.article
              initial="hidden"
              animate="visible"
              exit={{
                opacity: 0,
                transition: { duration: 1 },
              }}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
              className={styles.containerTitle}
            >
              <motion.div className={styles.title}>
                <motion.div variants={damping}>
                  <svg
                    width="157"
                    height="152"
                    viewBox="0 0 157 152"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    rotate={-5}
                  >
                    <motion.path
                      d="M12.3783 151.134L156.408 138.533L155.135 123.979L38.3233 134.198L142.473 12.9991L141.44 1.18558L4.21439 13.1913L5.52079 28.1235L115.811 18.4743L11.3696 139.604L12.3783 151.134Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="3"
                      initial="from"
                      animate="to"
                      variants={pathCheckVariants}
                    />
                  </svg>
                </motion.div>
                <motion.div variants={damping}>
                  <svg width="133" height="149" viewBox="0 0 133 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                      d="M0.95798 138.083L120.888 148.575L122.154 134.116L19.707 125.153L24.0066 76.0087L115.301 83.996L116.5 70.2923L25.2055 62.3051L29.1826 16.8468L130.4 25.7022L131.699 10.8645L12.9967 0.479382L0.95798 138.083Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="3"
                      initial="from"
                      animate="to"
                      variants={pathCheckVariants}
                    />
                  </svg>
                </motion.div>
                <motion.div variants={damping}>
                  <svg width="143" height="151" viewBox="0 0 143 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                      d="M12.3162 150.008L30.4617 148.421L26.1869 99.5602L85.3489 94.3842C103.872 92.7636 117.026 87.4544 124.81 78.4565C132.588 69.3957 135.906 58.3442 134.765 45.3021C133.536 31.252 128.298 20.7269 119.051 13.7269C109.868 6.72141 96.1084 4.02069 77.7739 5.62476L0.277409 12.4048L12.3162 150.008ZM24.9797 85.762L19.688 25.277L76.0147 20.3491C89.9388 19.1308 99.9704 20.9514 106.109 25.8108C112.306 30.6016 115.818 37.7224 116.644 47.1732C117.438 56.2459 115.245 63.8341 110.065 69.9377C104.88 75.9782 95.2936 79.6104 81.3064 80.8341L24.9797 85.762Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="3"
                      initial="from"
                      animate="to"
                      variants={pathCheckVariants}
                    />
                  </svg>
                </motion.div>
                <motion.div className={styles.letterH} variants={damping}>
                  <svg width="205" height="205" viewBox="0 0 205 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                      d="M16.4727 -0.000976562L204.753 16.4715L188.281 204.752L0.000220552 188.28L16.4727 -0.000976562Z"
                      fill="#D9FD51"
                    />
                    <motion.path
                      d="M21.5122 167.276L39.6577 168.863L45.1975 105.543L151.235 114.82L145.696 178.14L163.841 179.728L175.88 42.1244L157.734 40.5369L152.6 99.2263L46.5618 89.9492L51.6964 31.2598L33.5509 29.6723L21.5122 167.276Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="3"
                      initial="from"
                      animate="to"
                      variants={pathCheckVariants}
                    />
                  </svg>
                </motion.div>
                <motion.div variants={damping}>
                  <svg width="173" height="152" viewBox="0 0 173 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                      d="M83.8436 145.599L102.178 143.995L97.7132 92.9605L160.831 0.206495L140.89 1.95112L93.2196 73.1646C92.2013 74.5869 91.3842 75.7694 90.7683 76.7121C90.2154 77.6493 89.4613 78.8263 88.506 80.2432L88.0334 80.2845C86.8411 78.9921 85.8625 77.9667 85.0978 77.2082C84.3276 76.3868 83.349 75.3614 82.1622 74.132L22.4718 12.3114L0.923961 14.1966L79.3787 94.5645L83.8436 145.599Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="3"
                      initial="from"
                      animate="to"
                      variants={pathCheckVariants}
                    />
                  </svg>
                </motion.div>
                <motion.div variants={damping}>
                  <svg width="154" height="151" viewBox="0 0 154 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                      d="M0.134738 138.535L18.2803 140.122L23.1669 84.2679L87.4322 89.8904C102.238 91.1858 114.162 88.4197 123.203 81.5922C132.244 74.7647 137.311 65.1134 138.402 52.6384C139.494 40.1633 136.29 29.979 128.79 22.0853C121.36 14.1341 110.021 9.49156 94.7734 8.1576L12.1735 0.931042L0.134738 138.535ZM24.3162 71.1313L29.1035 16.4112L90.8172 21.8105C101.654 22.7586 109.407 25.9446 114.074 31.3685C118.742 36.7924 120.718 43.5997 120.002 51.7904C119.296 59.8551 116.165 66.2474 110.61 70.9673C105.123 75.6297 96.9297 77.4842 86.0298 76.5305L24.3162 71.1313ZM120.538 149.068L141.802 150.929L101.715 84.4737L82.4634 83.5513L120.538 149.068Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="3"
                      initial="from"
                      animate="to"
                      variants={pathCheckVariants}
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.article>
            <motion.div
              className={styles.text}
              style={{
                overflow: "hidden",
                display: "flex",
                fontSize: "2rem",
              }}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <AnimatedTextWord text="We’re a Digital Product Agency, Creating Aesthetic and Smart Solutions for Tech Startups and Enterprises." />
            </motion.div>
            <Image
              src={back}
              alt={""}
              className={styles.backIcon}
              data-scroll
              data-scroll-position="top"
              data-scroll-target="#main-cont"
              data-scroll-speed="1"
            />
            <Image
              src={ui}
              alt={""}
              className={styles.uiIcon}
              data-scroll
              data-scroll-position="top"
              data-scroll-target="#main-cont"
              data-scroll-speed="2"
            />
            <Image
              src={api}
              alt={""}
              className={styles.apiIcon}
              data-scroll
              data-scroll-position="top"
              data-scroll-target="#main-cont"
              data-scroll-speed="-1"
            />
            <Image
              src={ux}
              alt={""}
              className={styles.uxIcon}
              data-scroll
              data-scroll-position="top"
              data-scroll-target="#main-cont"
              data-scroll-speed="-5"
            />
            <Image
              src={vectorTop}
              alt={""}
              className={styles.vectorTop}
              data-scroll
              data-scroll-position="top"
              data-scroll-target="#main-cont"
              data-scroll-speed="-4"
            />
            <Image
              src={vectorY}
              alt={""}
              className={styles.vectorY}
              data-scroll
              data-scroll-position="top"
              data-scroll-target="#main-cont"
              data-scroll-speed="-7"
            />
            <Button title="Write Us" icon={writeUs} callback={() => onClickLink("#writeUs", scroll, 0)} />
            <div className={styles.iconsOrganizations}>
              <Image src={chess} alt={""} className={styles.chessIcon} />
              <Image src={innopolis} alt={""} className={styles.innopolisIcon} />
              <Image src={core} alt={""} className={styles.coreIcon} />
            </div>
          </div>
          <div className={styles.parallaxChild2} data-scroll data-scroll-position="top" data-scroll-speed="-1">
            <div
              className={styles.opacitystl}
              style={{ background: `rgba(0,0,0,1)`, opacity: 0.3, height: "420%", top: "120%", borderRadius: 0 }}
            ></div>
            <div className={styles.opacitystl} ref={op2} style={{ background: `rgba(0,0,0,1)`, opacity: 0 }}></div>

            <Services />
          </div>
          <div
            style={{
              position: "relative",
              zIndex: 103,
            }}
            ref={wrapper2}
          >
            <div className={styles.opacitystl} ref={op3} style={{ background: `rgba(0,0,0,1)`, opacity: 0 }}></div>
            <Cases opacity={`rgba(0,0,0,0)`} />
          </div>
          <div
            className={styles.parallaxChild4}
            ref={wrapper3}
            data-scroll
            data-scroll-position="bottom"
            data-scroll-speed="2"
          >
            <WriteUs />
          </div>
        </div>
      </div>
    </div>
  );
}
