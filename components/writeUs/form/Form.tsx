import React, { useState, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import { arrowInterested, request } from "../../../assets/icons";
import { ButtonForm } from "../../buttonForm/ButtonForm";
import { Input } from "../../input/Input";
import styles from "./Form.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Controller } from "swiper";
import { motion } from "framer-motion";

const interesteds = ["Branding", "App Design", "Web Design", "Development", "UX Design", "Illustration", "Data Science"];
const budget = ["<10k", "10-20k", "30-40k", ">50k"];

export const Form = (): JSX.Element => {
  const [flag, setFlag] = useState(false);
  const [yourProject, setYourProject] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budgetValue, setBudgetValue] = useState("");
  const [interested, setInterested] = useState("");
  const swiperRef = useRef<any>(null);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,func-style,require-await
  async function sendForm() {
    try {
      await axios.post("https://zephyr-git-dev-orniki.vercel.app/api/mail", {
        firstName,
        lastName,
        email,
        company,
        yourProject,
        budgetValue,
        interested,
      });
      setFlag(true);
    } catch (e) {
      // console.log("sending", e);
    } finally {
      setFirstName("");
      setLastName("");
      setEmail("");
      setCompany("");
      setYourProject("");
      setBudgetValue("");
      setInterested("");
    }
  }

  const swipe = (swiper: any) => {};

  return (
    <div className={styles.form}>
      <Input title={"First name *"} setValue={setFirstName} value={firstName} />
      <Input title={"Last name *"} setValue={setLastName} value={lastName} />
      <Input title={"Your email *"} setValue={setEmail} value={email} />
      <Input title={"Your company name"} setValue={setCompany} value={company} />
      <div className={styles.item}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div className={styles.titleItem}>Im interested in...</div>
          <Image src={arrowInterested} alt={""} />
        </div>
        <div className={styles.itemContent}>
          <Swiper
            ref={swiperRef}
            loop={false}
            grabCursor={true}
            slidesPerView={3}
            className="mySwiper"
            spaceBetween={8}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={(swiper) => swipe(swiper)}
            modules={[Pagination, Navigation, Controller]}
          >
            {interesteds.map((el, i) => (
              <SwiperSlide key={i}>
                <ButtonForm title={el} callback={setInterested} value={interested} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.titleItem}>Project budget (USD)...</div>
        <div className={styles.itemContent}>
          {budget.map((el, i) => (
            <ButtonForm key={i} title={el} callback={setBudgetValue} value={budgetValue} />
          ))}
        </div>
      </div>
      <button className={styles.button} onClick={sendForm}>
        <motion.svg className={styles.svgBorder} fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.rect
            x="1"
            y="1"
            width={"100%"}
            stroke="#070607"
            rx="16"
            initial={{ pathLength: 0, fill: "rgb(0, 0, 0, 0)" }}
            whileHover={{ pathLength: 1, fill: "rgb(189, 236, 11, 0.15)" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            strokeWidth={1}
          />
        </motion.svg>
          Send request <Image className={styles.image} src={request} alt={""}></Image>
      </button>
      {/* {flag && <ModalSendMessage setIsOpen={setFlag} />} */}
    </div>
  );
};
