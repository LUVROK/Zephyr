import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { development, productDesign, strategy } from "../../assets/background";
import styles from "./Services.module.scss";
import { textAnimation } from "../../utils/framerTextAnimation";
import { container } from "../../utils/framerTextAnimation";

export const Services = (): JSX.Element => {
  const ref = useRef(null);

  return (
    <div className={styles.container} ref={ref}>
      <div>
        <motion.h3 initial="hidden" whileInView="visible" variants={textAnimation} custom={1} className={styles.blockTitle}>
          Services
        </motion.h3>
        <motion.p initial="hidden" whileInView="visible" variants={textAnimation} custom={2} className={styles.textHeader}>
          With the help of strategy, we combine individual projects and methods into integrated solutions that benefit
          companies and help them grow.
        </motion.p>
      </div>
      <div className={styles.cards}>
        <motion.div
          className={styles.card}
          initial="hidden"
          whileInView="visible"
          variants={container}
          exit={{ scale: 1.1 }}
          custom={0.1}
        >
          <div className={styles.containerImage}>
            <Image src={strategy} alt={""} className={styles.image} />
          </div>
          <h3 className={styles.cardTitle}>Strategy</h3>
          <p className={styles.cardText}>
            We can help you outline the positioning of your brand that will exactly match your business goals.
          </p>
          <div className={styles.buttons}>
            <button>UX/UI Design</button>
            <button>Naming</button>
            <button>Research</button>
            <button>Branding</button>
          </div>
        </motion.div>
        <motion.div
          className={styles.card}
          initial="hidden"
          whileInView="visible"
          variants={container}
          exit={{ scale: 1.1 }}
          custom={0.2}
        >
          <div className={styles.containerImage}>
            <Image src={development} alt={""} className={styles.image} />
          </div>
          <h3 className={styles.cardTitle}>Development</h3>
          <p className={styles.cardText}>
            Designers and developers will work together to create a single interface and backend that will give you and your
            customers everything you need.
          </p>
          <div className={styles.buttons}>
            <button>Front-end</button>
            <button>Back-end</button>
            <button>Mobile</button>
          </div>
        </motion.div>
        <motion.div
          className={styles.card}
          initial="hidden"
          whileInView="visible"
          variants={container}
          exit={{ scale: 1.1 }}
          custom={0.3}
        >
          <div className={styles.containerImage}>
            <Image src={productDesign} alt={""} className={styles.image} />
          </div>
          <h3 className={styles.cardTitle}>Product Design</h3>
          <p className={styles.cardText}>
            We will carefully approach the process of developing interfaces to help our customers achieve their business
            goals.
          </p>
          <div className={styles.buttons}>
            <button>UX/UI Design</button>
            <button>Design systems</button>
          </div>
        </motion.div>
        {/* <div className={styles.card}> */}
        {/*   <Image src={imageCard} alt={''}></Image> */}
        {/*   <h3>Branding</h3> */}
        {/*   <p>End-to-end high-quality user experience that generates results. Whether it's a service, mobile application, or eCommerce site – we’ve got your back</p> */}
        {/*   <button>UX/UI Design</button> */}
        {/* </div> */}
      </div>
    </div>
  );
};
