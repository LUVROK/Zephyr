import React from "react";
import styles from "../styles/othersPages.module.scss";
import { WriteUs } from "../components";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,import/no-default-export
export default function About() {
  return (
    <div className={styles.container} style={{ backgroundColor: "#ECE7E3" }}>
      <div className={styles.Wrapper}>contacts</div>
      <div className={styles.content}></div>
      <WriteUs />
    </div>
  );
}
