import React from "react";
import Image from "next/image";
import {
  vector_1,
  vector_4,
  vector_5,
  vector_6,
  vector_7,
  vector_8,
  vector_9,
  vector_10,
  vector_11,
  vector_12,
  vector_13,
  vector_14,
  vector_15,
  vector_16,
  vector_17,
} from "../../assets/background";
import styles from "./Vector.module.scss";

export const Vector = (): JSX.Element => (
  <div className={styles.vectors}>
    <Image src={vector_1} alt={""} className={styles.vector_1} />
    <Image src={vector_4} alt={""} className={styles.vector_4} />
    <Image src={vector_5} alt={""} className={styles.vector_5} />
    <Image src={vector_6} alt={""} className={styles.vector_6} />
    <Image src={vector_7} alt={""} className={styles.vector_7} />
    <Image src={vector_8} alt={""} className={styles.vector_8} />
    <Image src={vector_9} alt={""} className={styles.vector_9} />
    <Image src={vector_10} alt={""} className={styles.vector_10} />
    <Image src={vector_11} alt={""} className={styles.vector_11} />
    <Image src={vector_12} alt={""} className={styles.vector_12} />
    <Image src={vector_13} alt={""} className={styles.vector_13} />
    <Image src={vector_14} alt={""} className={styles.vector_14} />
    <Image src={vector_15} alt={""} className={styles.vector_15} />
    <Image src={vector_16} alt={""} className={styles.vector_16} />
    <Image src={vector_17} alt={""} className={styles.vector_17} />
  </div>
);
