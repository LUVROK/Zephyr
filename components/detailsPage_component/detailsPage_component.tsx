import React, { useRef, useLayoutEffect } from "react";
import styles from "../../styles/details_job.module.scss";
import { Ijob_details } from "../../utils/types";
import { triggerOpacityOne } from "../../utils/framerTextAnimation";
import { WriteUsDark } from "../writeUs/WriteUsDark";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Details_Page = ({ props }: Ijob_details): JSX.Element => {
  const op1 = useRef(null);
  const op2 = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element1: any = op1.current;
    let element2: any = op2.current;

    let t1 = gsap.timeline();

    triggerOpacityOne(t1, element1, "top top");
    triggerOpacityOne(t1, element2, "bottom-=10% bottom");
    ScrollTrigger.refresh();
    return () => {
      t1.kill();
      // (ScrollTrigger as any).kill();
    };
  }, []);

  return (
    <>
      {props.title ? (
        <div className={styles.container}>
          <div className={styles.wrapper} data-scroll data-scroll-speed="-5" data-scroll-position="top">
            <div className={styles.opacitystl} ref={op1} style={{ background: `rgba(0,0,0,1)`, opacity: 0 }}></div>
            <h1>{props.title}</h1>
            <h3>{props.type_job}</h3>
          </div>
          <div className={styles.content} data-scroll data-scroll-speed="-2" data-scroll-position="top">
            <div className={styles.opacitystl} ref={op2} style={{ background: `rgba(0,0,0,1)`, opacity: 0 }}></div>
            <div className={styles.contentBlock}>
              {props.textContent.map((data, i) => (
                <div key={i} dangerouslySetInnerHTML={{ __html: data }} />
              ))}
            </div>
          </div>
          <div className={styles.WriteUsDetails} data-scroll data-scroll-speed="4" data-scroll-position="bottom">
            <WriteUsDark />
          </div>
        </div>
      ) : (
        <div className={(styles.container, styles.pageNotFound)}>Page not found</div>
      )}
    </>
  );
};

export default Details_Page;
