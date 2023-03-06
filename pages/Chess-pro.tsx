import React, { useRef, useLayoutEffect } from "react";
import styles from "../styles/othersPages.module.scss";
import { WriteUs } from "../components";
import { miniImg1, chessPage } from "../assets/image";
import Image from "next/image";
import { designTX1, designTX2 } from "../assets/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { textAnimation } from "../utils/framerTextAnimation";
import { ImgAnimation, buttonAnimation } from "../utils/framerTextAnimation";
import { triggerOpacity } from "../utils/framerTextAnimation";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,import/no-default-export
export default function ChessPro() {
  const op1 = useRef(null);
  const op2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element1: any = op1.current;
    let element2: any = op2.current;
    let t1 = gsap.timeline();

    triggerOpacity(t1, element1, element2);
    ScrollTrigger.refresh();
    return () => {
      t1.kill();
      // (ScrollTrigger as any).kill();
    };
  }, []);

  return (
    <div className={styles.container} style={{ backgroundColor: "#CBE7C4" }}>
      <div className={styles.Wrapper} data-scroll data-scroll-position="top" data-scroll-speed="-2">
        <div className={styles.opacitystl} ref={op1} style={{ background: `rgba(0,0,0,1)`, opacity: 0 }}></div>
        <div className={styles.Wrapper__left}>
          <div className={styles.buttons}>
            <motion.button initial="hidden" whileInView="visible" variants={buttonAnimation} custom={1}>
              UX/UI Design
            </motion.button>
            <motion.button initial="hidden" whileInView="visible" variants={buttonAnimation} custom={1.5}>
              Mobile development
            </motion.button>
          </div>
          <motion.h2
            className={styles.InnopolisH2}
            initial="hidden"
            whileInView="visible"
            variants={textAnimation}
            custom={0.25}
          >
            How we build top 10 Chess app
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
            Initially, we laid down a resource of 6 months for the development of a mobile application, but thanks to the
            competent architecture and proactivity of the team, we managed to release the first version in just 3 months.
          </motion.p>
          <motion.div className={styles.Owner}>
            <img src={miniImg1.src} alt="" />
            <div className={styles.Ownerdisc}>
              <div className="name">Evgeny Moikin</div>
              <div className="nameProf">Product Owner Chess.pro</div>
            </div>
          </motion.div>
        </div>
        <div className={styles.Wrapper__right}>
          <motion.img src={chessPage.src} alt="" initial="hidden" whileInView="visible" variants={ImgAnimation} custom={1} />
        </div>
      </div>
      <div className={styles.content} data-scroll data-scroll-position="top" data-scroll-speed="2">
        <div className={styles.opacitystl} ref={op2} style={{ background: `rgba(0,0,0,1)`, opacity: 0 }}></div>
        <div className={styles.colorbackground} style={{ backgroundColor: "#FFFFFF" }}></div>
        <div className={styles.contentBlock}>
          <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            Chess.pro | Mobile App
          </motion.h3>
          <p>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              Chess.pro is an internet chess and social networking website for players. Live online chess can be played
              against other users in daily, rapid, blitz or bullet time controls, with a number of chess variants also
              available. Chess versus a chess engine, computer analysis, chess puzzles and teaching resources are also
              offered.
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              Thanks to its thoughtful design and competent marketing policy, it is among the leaders in its segment.
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              The app is available on <span>IOS</span> and <span>Android</span>.
            </motion.span>
          </p>
          <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            Our approach and solution
          </motion.h3>
          <p>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              Taking the core elements of the brand and its pieces, we established a vibrant aesthetic experience online.
              This included identifying evocative shapes, symbols, and colours and infusing them into the site’s functional
              elements.
            </motion.span>
          </p>
          <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            Design
          </motion.h3>
          <p>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              We started creating a mobile application based on an already built brand platform and with its own visual
              style, so we had to look for the best solutions based on existing guidelines.
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              To begin with, we conducted a design review of all existing elements and adapted them to the mobile resolution.
              Moreover, we have created an internal UI Kit step by step, which simplified the design and development of the
              application in the future.
            </motion.span>
          </p>
          <motion.p className={styles.imagesP} initial="hidden" whileInView="visible" variants={ImgAnimation} custom={0.5}>
            <Image className={styles.image} src={designTX1} alt={""} />
          </motion.p>
          <p className={styles.imagesP}>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              Despite the fact that several people worked on the design at the same time, it turned out to create a
              consistent design on all the screens of the app, due to the fact that everyone focused on the UI Kit.
            </motion.span>
          </p>
          <motion.span
            className={styles.imagesP}
            initial="hidden"
            whileInView="visible"
            variants={ImgAnimation}
            custom={0.5}
          >
            <Image className={styles.image} src={designTX2} alt={""} />
          </motion.span>
          <p>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              Before transferring the design to development, all screens were combined into a single flow, which helped to
              detect missing states and screens. Thus, we saved resources for development. Also, thanks to our solution, it
              was not necessary to explain to the designers how the user could get to this or that screen.
            </motion.span>
          </p>
          <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            Development
          </motion.h3>
          <p>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              The application architecture is based on a micro service architecture built on Firebase and AWS. Each of the
              microservices is based on the most suitable technology for it: they can be written in different programming
              languages, but they do not conflict with each other. The data factory and analytics of the new system are based
              on the PostgreSQL DBMS, and services based on Kafka, Mongo, Cassandra, etc. are also involved in the solution.
              Some of the microservices were taken from the web version, and some were modified specifically for the mobile
              app.
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              The frontend of the app is built on React and Capacitor technologies. Thus, we managed to reuse most of the
              logic and layout in the mobile application, as well as adapt the web interface.
            </motion.span>
          </p>
        </div>
      </div>
      <div className={(styles.WriteUs, styles.WriteUsChs)}>
        <WriteUs />
      </div>
    </div>
  );
}
