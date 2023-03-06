import React from "react";
import styles from "../styles/othersPages.module.scss";
import { WriteUs } from "../components";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,import/no-default-export
export default function About() {
  return (
    <div className={styles.container} style={{ backgroundColor: "#ECE7E3" }}>
      {/* <Header /> */}
      <div className={styles.Wrapper}>about</div>
      <div className={styles.content}></div>
      <WriteUs />
    </div>
  );
}
