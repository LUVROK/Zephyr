import React, { useRef, useState } from "react";
import { Form2 } from "./form/Form2";
import styles from "./WriteUs.module.scss";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { motion } from "framer-motion";
import Link from "next/link";
import { svgAnim } from "../../utils/framerTextAnimation";

export const WriteUsDark = ({
  setIsOpen,
  close,
}: {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  close?: () => void;
}): JSX.Element => {
  const { scroll } = useLocomotiveScroll();
  const ref = useRef(null);

  const onClickLinkTab = (): void => {
    if (setIsOpen) {
      if (close) {
        close();
      }
    }
    let elem = document.querySelector(".main-cont");
    scroll.scrollTo(elem, {
      offset: "0",
      duration: `1250`,
      easing: [0.5, 0.1, 0.4, 1],
    });
  };

  return (
    <div
      className={styles.container}
      ref={ref}
      id="writeUs"
      style={{
        background: "#323036",
      }}
    >
      <div
        className={styles.containerForm}
        style={{
          flexFlow: "column",
          alignItems: "center",
        }}
      >
        <Form2 />
        <div
          className={styles.containerRight}
          style={{
            maxWidth: "420px",
          }}
        >
          <div className={styles.containerButton}>
            <div
              className={styles.but}
              onClick={(): void => {
                navigator.clipboard.writeText("job@zephyr.agency");
              }}
            >
              <motion.svg className={styles.svgBorder} fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.rect
                  x="1"
                  y="1"
                  stroke="rgb(247, 255, 143)"
                  rx="23.5"
                  width={"100%"}
                  initial={{ pathLength: 0, fill: "rgb(247, 255, 143, 0)" }}
                  whileHover={{ pathLength: 1, fill: "rgb(247, 255, 143, 0.15)" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  strokeWidth={1}
                />
              </motion.svg>
              <button className={styles.copy} style={{ color: "#F7FF8F" }}>
                job@zephyr.agency
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomBlock}>
        <div className={styles.none}></div>
        <nav>
          <ul>
            <li>
              <Link onClick={onClickLinkTab} href={"/privacy_policy"}>
                Privacy Policy
              </Link>
            </li>
            <li className={styles.none}></li>
            <li>
              <Link onClick={onClickLinkTab} href={"/terms_and_conditions"}>
                Terms and Conditions
              </Link>
            </li>
            <li className={styles.none}></li>
            <li>
              <Link onClick={onClickLinkTab} href={"/cookies"}>
                Cookies
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.toTop} onClick={onClickLinkTab}>
          {/* <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.0605469" width="47.9608" height="48" rx="23.9804" fill="#2E2E2E" />
            <path
              d="M10.041 25.0768L24.041 11.0768M24.041 11.0768L38.041 25.0768M24.041 11.0768L24.0412 36.9233"
              stroke="white"
              strokeWidth="4"
            />
          </svg> */}
          <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.0605469" width="47.9608" height="48" rx="23.9804" fill="#2E2E2E" />
            <path
              d="M10.041 25.0768L25.241 11.0768M22.841 11.0768L38.041 25.0768M24.041 12.0768L24.0412 36.9233"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
