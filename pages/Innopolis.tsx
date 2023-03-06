import React, { useRef, useLayoutEffect } from "react";
import styles from "../styles/othersPages.module.scss";
import { WriteUs } from "../components";
import { miniImg1, innopolis } from "../assets/image";
import Image from "next/image";
import { innopolisImg } from "../assets/image/index";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ImgAnimation, buttonAnimation, triggerOpacity, textAnimation } from "../utils/framerTextAnimation";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,import/no-default-export
export default function ChessPro() {
  const op1 = useRef(null);
  const op2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  // React.useEffect(() => {
  //   ScrollTrigger.refresh();
  // }, []);

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
    <div className={styles.container} style={{ backgroundColor: "#C4DAE7" }}>
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
            // style={{ fontSize: "48px", width: "75%" }}
            className={styles.InnopolisH2}
            initial="hidden"
            whileInView="visible"
            variants={textAnimation}
            custom={0.25}
          >
            How we build social platform for top 10 best young universities
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
            Initially, we laid down a resource of 6 months for the development of a mobile application, but thanks to the
            competent architecture and proactivity of the team, we managed to release the first version in just 3 months.
          </motion.p>
          <motion.div className={styles.Owner} initial="hidden" whileInView="visible" variants={textAnimation} custom={0.75}>
            <img src={miniImg1.src} alt="" />
            <div className={styles.Ownerdisc}>
              <div className="name">Evgeny Moikin</div>
              <div className="nameProf">Product Owner Chess.pro</div>
            </div>
          </motion.div>
        </div>
        <div className={styles.Wrapper__right}>
          <motion.img
            src={innopolis.src}
            style={{ width: "80%" }}
            alt=""
            initial="hidden"
            whileInView="visible"
            variants={ImgAnimation}
            custom={1}
          />
        </div>
      </div>
      <div className={styles.content} data-scroll data-scroll-position="top" data-scroll-speed="2">
        <div className={styles.opacitystl} ref={op2} style={{ background: `rgba(0,0,0,1)`, opacity: 0 }}></div>
        <div className={styles.colorbackground} style={{ backgroundColor: "#FFFFFF" }}></div>
        <div className={styles.contentBlock}>
          <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            Innopolis | Club
          </motion.h3>
          <p>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              Innopolis is a new IT university specializing in education and research in the field of information technology
              and robotics, which is among the top 10 best young universities in the world according to U-Multirank.
              Everything is created here for students and scientists: academic freedom, open culture, teaching in English,
              world-famous professors and unique laboratories for research.
            </motion.span>
          </p>
          <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            Our approach and solution
          </motion.h3>
          <p>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              In a short time, our task was to create from scratch a platform where students can create groups, plan training
              and communicate.
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              The interface should be radically simple, clear and easy to use. It should help students to be more productive.
              The platform must simultaneously support 50,000 DAU and more than 1,000,000 transactions during peak operating
              hours.
            </motion.span>
          </p>
          <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            Strategy and Planning
          </motion.h3>
          <p>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              After collecting the requirements, we put together the app concept in Miro. We described the application pages,
              interaction with internal services, outline the endpoints and contracts of interaction between the frontend and
              the backend. The system turned out to be simple, logical, uniform, and most importantly — it will be convenient
              to work with it, even when new departments appear at the university, and accordingly new requirements for the
              application.
            </motion.span>
            <motion.span
              className={styles.imagesP}
              initial="hidden"
              whileInView="visible"
              variants={ImgAnimation}
              custom={0.5}
            >
              <Image className={styles.image} src={innopolisImg} alt={""} />
            </motion.span>
          </p>
          <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            Design
          </motion.h3>
          <p>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              After agreeing on the concept of the application, we started creating page designs. We have worked out
              adaptations for different screen resolutions and customer flows.
            </motion.span>
          </p>
          <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            Development
          </motion.h3>
        </div>
      </div>
      <div className={(styles.WriteUs, styles.WriteUsIn)}>
        <WriteUs />
      </div>
    </div>
  );
}
