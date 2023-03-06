import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import style from "./Button.module.scss";
import { IButton } from "./types";

export const Button = ({ title, icon, callback, href }: IButton): JSX.Element => (
  <motion.div className={style.button} onClick={callback}>
    {title}
    <Image src={icon} alt={""} />
  </motion.div>
);
