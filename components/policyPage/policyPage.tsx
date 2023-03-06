import React from "react";
import styles from "../../styles/info.module.scss";
import { motion } from "framer-motion";
import { IcontentObjectObj } from "../../utils/types";
import { textAnimation } from "../../utils/framerTextAnimation";

const PolicyPage = ({ contentObject }: IcontentObjectObj): JSX.Element => {
  return (
    <div className={styles.container} style={{ backgroundColor: "#FFFFFF" }}>
      <div className={styles.content}>
        <h1 dangerouslySetInnerHTML={{ __html: contentObject.title }} />
        <div className={styles.contentBlock}>
          {contentObject.contentObject.map((data, i) => (
            <>
              {data.titleH2 ? (
                <motion.h3
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={textAnimation}
                  custom={0.25}
                  style={data.titleH3 ? { marginBottom: "12px" } : {}}
                >
                  <span dangerouslySetInnerHTML={{ __html: data.titleH2 }} />
                </motion.h3>
              ) : null}
              {data.titleH3 ? (
                <motion.h4
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={textAnimation}
                  custom={0.25}
                  style={data.titleH2 ? { marginTop: "0px", marginBottom: "12px" } : {}}
                >
                  <span dangerouslySetInnerHTML={{ __html: data.titleH3 }} />
                </motion.h4>
              ) : null}
              <p>
                {data.text
                  ? data.text.map((data, i) => (
                      <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5} key={i}>
                        <span dangerouslySetInnerHTML={{ __html: data }} />
                      </motion.span>
                    ))
                  : null}
              </p>
              {data.liList ? (
                <ul>
                  {data.liList.map((data, i) => (
                    <motion.li
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      variants={textAnimation}
                      custom={0.5}
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  ))}
                </ul>
              ) : null}

              {data.textAfterliList ? (
                <p>
                  <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
                    <span dangerouslySetInnerHTML={{ __html: data.textAfterliList }} />
                  </motion.span>
                </p>
              ) : null}
              {data.list
                ? data.list.map((data, i) => (
                    <p key={i} className={styles.list}>
                      <motion.span
                        initial="hidden"
                        whileInView="visible"
                        variants={textAnimation}
                        custom={0.5}
                        className={styles.title}
                      >
                        <span dangerouslySetInnerHTML={{ __html: data.title }} />
                      </motion.span>
                      <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5}>
                        <span dangerouslySetInnerHTML={{ __html: data.text }} />
                      </motion.span>
                    </p>
                  ))
                : null}
              <p className={styles.contact}>
                {data.contact
                  ? data.contact.map((data, i) => (
                      <motion.span initial="hidden" whileInView="visible" variants={textAnimation} custom={0.5} key={i}>
                        <span dangerouslySetInnerHTML={{ __html: data }} />
                      </motion.span>
                    ))
                  : null}
              </p>
              {data.liListafterafter ? (
                <ul>
                  {data.liListafterafter.map((data, i) => (
                    <motion.li
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      variants={textAnimation}
                      custom={0.5}
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  ))}
                </ul>
              ) : null}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
