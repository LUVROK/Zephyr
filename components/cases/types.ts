import React from 'react';

export interface INavlist {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
  close?: () => void
}
