import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navlist.module.scss";
import { INavlist } from "../../../utils/types";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { onClickLink } from "../../../utils/funcUtils";

export const Navlist = ({ setIsOpen, close }: INavlist): JSX.Element => {
  const { scroll } = useLocomotiveScroll();
  const router = useRouter();
  const onClickLinkTab = (): void => {
    onClickLink(".main-cont", scroll, 0, setIsOpen, close);
  };

  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <Link onClick={onClickLinkTab} className={router.pathname === "/" ? styles.activeLink : styles.link} href={"/"}>
              Explore
            </Link>
          </li>
          <li>
            <Link
              onClick={onClickLinkTab}
              className={router.pathname === "/cases" ? styles.activeLink : styles.link}
              href={"/cases"}
            >
              Cases
            </Link>
          </li>
          {/* <li>
            <Link
              onClick={onClickLinkTab}
              className={router.pathname === "/about" ? styles.activeLink : styles.link}
              href={"/about"}
            >
              About Us
            </Link>
          </li> */}
          <li>
            <Link
              onClick={onClickLinkTab}
              className={router.pathname === "/jobs" ? styles.activeLink : styles.link}
              href={"/jobs"}
            >
              Jobs
            </Link>
          </li>
          {/* <li>
            <Link
              onClick={onClickLinkTab}
              className={router.pathname === "/contacts" ? styles.activeLink : styles.link}
              href={"/contacts"}
            >
              Contacts
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};
