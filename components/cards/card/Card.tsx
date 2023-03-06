import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ICard } from './card.module';
import styles from './Card.module.scss';

export const Card = ({
  textTop,
  textBottom,
  icon,
  background,
  circleRightTop,
  circleLeftTop,
  circleRightBottom,
  circleLeftBottom,
  color,
}: ICard): JSX.Element => (
  <motion.div animate={{ background }} className={styles.container}>
    <div className={styles.circles}>
      <motion.div animate={{ background: circleLeftTop }} className={styles.circle}></motion.div>
      <motion.div animate={{ background: circleRightTop }} className={styles.circle}></motion.div>
    </div>
    <div>
      <motion.div animate={{ color }} className={styles.textTop}>{textTop.toUpperCase()}</motion.div>
      <motion.div animate={{ color }} className={styles.textBottom}>{textBottom.toUpperCase()}</motion.div>
    </div>
    <div className={styles.circles}>
      <motion.div animate={{ background: circleLeftBottom }} className={styles.circle}></motion.div>
      <motion.div animate={{ background: circleRightBottom }} className={styles.circle}></motion.div>
    </div>
    {icon &&
                <div className={styles.icon}>
                  <Image src={icon} alt={''} />
                </div>
    }
  </motion.div>
);
