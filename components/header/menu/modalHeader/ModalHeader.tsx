import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import zeppyr from '../../../../assets/background/iconShapka.svg';
import arrowCall from '../../../../assets/icons/arrowCall.svg';
import exit from '../../../../assets/icons/exitIcon.svg';
import { Navlist } from '../../navlist/Navlist';
import styles from './ModalHeader.module.scss';

const cx = classNames.bind(styles);

export const ModalHeader = ({
  setIsOpen,
  isOpen,
}: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, isOpen: boolean }): JSX.Element => {
  const [flag, setFlag] = useState(isOpen);
  const container = cx({
    container: true,
    openModal: flag,
    closeModal: !flag,
  });
  const close = (): void => {
    setFlag(false);
    setTimeout((): void => {
      setIsOpen(false);
    }, 120);
  };
  return (
    <div className={container}>
      <div className={styles.header}>
        <Image src={zeppyr} alt={''}></Image>
        <Image onClick={close} src={exit} alt={''}></Image>
      </div>
      <Navlist setIsOpen={setIsOpen} close={close} />
      <a className={styles.call} href={'https://calendly.com/monophora/30min'} target={'_blank'} rel="noreferrer">Book a call <Image src={arrowCall} alt={''} /></a>
    </div>
  );
};
