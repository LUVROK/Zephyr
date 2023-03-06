import React from "react";

export interface INavlist {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  close?: () => void;
}

export interface IcontentObjectObj {
  contentObject: IcontentObjectText;
}
export interface IcontentObjectText {
  title: string;
  contentObject: IcontentObject[];
}
export interface IcontentObject {
  titleH2?: string;
  titleH3?: string;
  text?: Array<string>;
  table?: any;
  liList?: Array<string>;
  textAfterliList?: string;
  list?: Array<List>;
  contact?: Array<string>;
  liListafterafter?: Array<string>;
}

interface List {
  title: string;
  text: string;
}

export interface job {
  teams: Array<any>;
  technology_stack: Array<any>;
  title: string;
  type_job: string;
  link: string;
  discription: string;
}

export interface Ijob_details {
  props: job_details;
}

export interface job_details {
  title: string;
  type_job: string;
  textContent: Array<string>;
}
