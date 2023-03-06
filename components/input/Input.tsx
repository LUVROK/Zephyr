import React, { ChangeEvent } from 'react';
import styles from './Input.module.scss';
import { IInput } from './types';

export const Input = ({ title, setValue, value }:IInput): JSX.Element => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  return (
    <input value={value} type="text" placeholder={title} className={styles.input} onChange={onChange} />
  );
};
