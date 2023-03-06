import React from "react";
import { dragon } from "../../assets/background/index";
import { Card } from "./card/Card";
import styles from "./Cards.module.scss";

export const Cards = (): JSX.Element => (
  <div className={styles.cards}>
    <div className={styles.twoCardLine}>
      <Card
        background="#60A88D"
        textTop="sberclass"
        textBottom="online platform"
        circleLeftTop="#F3F9F2"
        circleRightTop="#F3F9F2"
        circleRightBottom="#F3F9F2"
        circleLeftBottom="#C7AFE8"
        color="#F3F9F2"
      />
      <Card
        background="#534DE2"
        textTop="Coreledger"
        textBottom="mobile application"
        circleLeftTop="#F3F9F2"
        circleRightTop="#F3F9F2"
        circleRightBottom="#F3F9F2"
        circleLeftBottom="#F3F9F2"
        color="#F3F9F2"
      />
    </div>
    <Card background="#F5CF46" textTop="chesspro" textBottom="mobile application" />
    <Card background="#F7CDE5" textTop="innopolis" textBottom="online platform" />
    <Card background="#A1E254" textTop="Park Tower" textBottom="video analytics system" icon={dragon} />
  </div>
);
