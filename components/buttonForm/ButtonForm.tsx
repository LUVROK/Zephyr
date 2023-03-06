import React from "react";
import classNames from "classnames/bind";
import styles from "./ButtonForm.module.scss";
import { IButtonForm } from "./types";

const cx = classNames.bind(styles);
export const ButtonForm = ({ title, callback, value }: IButtonForm): JSX.Element => {
  const buttonClass = cx({
    button: true,
    buttonActive: title === value,
  });
  return (
    <button
      className={buttonClass}
      onClick={
        // (): void => callback(title)
        (): void => {
          callback(title);
          // console.log(title);
          // console.log(value);
        }
      }
    >
      {title}
    </button>
  );
};
