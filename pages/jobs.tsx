import React, { useState } from "react";
import styles from "../styles/jobs.module.scss";
import { jobs, Filter } from "../utils/jobsUtils";
import { ButtonForm } from "../components";
import { onClickLink } from "../utils/funcUtils";
import Link from "next/link";
import { useLocomotiveScroll } from "react-locomotive-scroll";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,import/no-default-export
export default function Jobs() {
  const { scroll } = useLocomotiveScroll();
  const [choose, setChoose] = useState("All teams");
  const onClickLinkTab = (): void => {
    onClickLink(".main-cont", scroll, 0);
  };

  // gsap.registerPlugin(ScrollTrigger);

  // React.useEffect(() => {
  //   ScrollTrigger.refresh();
  // }, []);

  return (
    <>
      <div className={styles.container} style={{ backgroundColor: "#FFFFFF" }}>
        <div className={styles.Wrapper}>
          <h1>
            We have
            <br />
            <span>267</span> open
            <br />
            positions
          </h1>
          <div className={styles.Filter}>
            <h4>Filter by teams:</h4>
            <div className={styles.buttons}>
              {Filter.map((el, i) => (
                <ButtonForm key={i} title={el} callback={setChoose} value={choose} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.content}>
          {jobs.map((el, i) => (
            <div key={i}>
              {el.teams.map((elChoose: any, i: number) =>
                elChoose === choose ? (
                  <Link className={styles.job_element} key={i} onClick={onClickLinkTab} href={el.link}>
                    <div className={styles.job_element__left}>
                      <div className={styles.buttons}>
                        {el.teams.map((el: string, i: number) =>
                          el !== "All teams" ? (
                            <button className={styles.teamsButton} key={i}>
                              {el}
                            </button>
                          ) : null
                        )}
                      </div>
                      <h2>{el.title}</h2>
                      <h3>{el.type_job}</h3>
                    </div>
                    <div className={styles.job_element__right}>
                      <div className={styles.buttons}>
                        {el.technology_stack.map((el, i) => (
                          <button className={styles.teamsButton} key={i}>
                            {el}
                          </button>
                        ))}
                      </div>
                      <p className={styles.disc}>
                        We are an international product studio. We are looking for a developer for an innovative project —
                        this is a new messenger, exciting the Middle East market. Video calls, broadcasts, chats, news and
                        even e-com. It will definitely not be boring!
                      </p>
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
