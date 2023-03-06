import React, { useRef, useLayoutEffect } from "react";
import styles from "../styles/othersPages.module.scss";
import { WriteUs } from "../components";
import { miniImg1, txPagePng } from "../assets/image";
import Image from "next/image";
import { designTX1, designTX2 } from "../assets/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { textAnimation } from "../utils/framerTextAnimation";
import { ImgAnimation, buttonAnimation } from "../utils/framerTextAnimation";
import { triggerOpacity } from "../utils/framerTextAnimation";

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,import/no-default-export
export default function Sberclass() {
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
    <div className={styles.container} style={{ backgroundColor: "#ECE7E3" }}>
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
          <motion.h2 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            How we Improve UX in TX.Mobile
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
            When I looked at the finished functionality, it was executed perfectly from the first time, it's all thanks to
            competent work with requirements and constant synchronization during work.
          </motion.p>
          <motion.div className={styles.Owner} initial="hidden" whileInView="visible" variants={textAnimation} custom={0.75}>
            <img src={miniImg1.src} alt="" />
            <div className={styles.Ownerdisc}>
              <div className="name">Max Telnykh</div>
              <div className="nameProf">Product Owner TX.Mobile</div>
            </div>
          </motion.div>
        </div>
        <div className={styles.Wrapper__right}>
          <motion.img src={txPagePng.src} alt="" initial="hidden" whileInView="visible" variants={ImgAnimation} custom={1} />
        </div>
      </div>
      <div className={styles.content} data-scroll data-scroll-position="top" data-scroll-speed="2">
        <div className={styles.opacitystl} ref={op2} style={{ background: `rgba(0,0,0,1)`, opacity: 0 }}></div>
        <div className={styles.colorbackground} style={{ backgroundColor: "#FFFFFF" }}></div>
        <div className={styles.contentBlock}>
          <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            CoreLedger | TX.Mobile
          </motion.h3>
          <p>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              Blockchain transactions are only possible if they are cryptographically signed. Although this sounds like a
              complex thing (which it is on a programmatic level) they have made the process <b>simple</b> and <b>secure</b>{" "}
              throughout their products. With TX.Mobile simple mobile interface tool, you can store your private keys and
              check, allow, or reject transactions.
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
              The app was written on flutter. This technology is outdated and many critical plugins used in the application
              have ceased their support.{" "}
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              In this regard, we decided to migrate the application to React Native.{" "}
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              The main advantages were in{" "}
            </motion.span>
          </p>
          <motion.ul initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
            <li>Crossnativity of the app</li>
            <li>The ability to reuse modules from another products</li>
            <li>A large community around the technology that supported and updated plugins</li>
            <li>Support for target Android and IOS versions</li>
          </motion.ul>
          <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            Design
          </motion.h3>
          <p>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              The first priority for us was to deal with the design.
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              Starting from putting the design in order, we combined the iOS and Android versions into one, divided by flow
              and established the design system.
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              This included identifying evocative shapes, symbols, and colours and infusing them into the site’s functional
              elements.
            </motion.span>
          </p>
          <motion.p className={styles.imagesP} initial="hidden" whileInView="visible" variants={ImgAnimation} custom={0.5}>
            <Image className={styles.image} src={designTX1} alt={""} />
            <Image className={styles.image} src={designTX2} alt={""} />
          </motion.p>
          <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            Smartsourcing
          </motion.h3>
          <p>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              CoreLedger was looking for outsourcing, so that the team would create and maintain the application while the
              main team switched to other projects of the company.
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              We offered to solve their problem by <b>smartsourcing</b>.
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              Smartsourcing is a new level of outsourcing that helps not only to unload the core team, but also to form
              internal competencies and create truly innovative products. Our solution has <b>reduced costs</b> as well as{" "}
              <b>increased business innovation</b>. It is strategically important to review business processes if the company
              plans to <b>use resources intelligently</b>.
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              The main goal was to quickly assemble a team and get started, we created vacancies based on the client's
              request. After our screening and selection of candidates, we have approved successful candidates with the
              client.
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              In summary, we managed to assemble an <b>optimal team</b> capable of <b>offering high-tech solutions</b> in the{" "}
              <b>shortest possible time</b>.
            </motion.span>
          </p>
          <motion.h4 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            Final team:
          </motion.h4>
          <motion.ul initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
            <li>2 React-Native developers</li>
            <li>Automotion QA</li>
            <li>Team leader</li>
            <li>Project manager</li>
          </motion.ul>
          <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={0.25}>
            Process
          </motion.h3>
          <p>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              Several increments were planned, which served as well as synchronization points between the development team
              and the client. Each increment included several sprints, in which the project manager and team leader first
              collected and clarified the requirements, and then passed it on to the developers, the tester in the process
              made sure that all the requirements were implemented. At the end of the incerment, the client received a
              prepared and tested app.
            </motion.span>
            <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
              Using an <b>agile project management process</b> for development we managed to work with the client to provide
              a<b>solution that focused on the requirements drawn out in the UX sessions</b>.
            </motion.span>
          </p>
        </div>
      </div>
      <div className={(styles.WriteUs, styles.WriteUsSb)}>
        <WriteUs />
      </div>
    </div>
  );
}
