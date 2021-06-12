import React from "react";

export interface ButtonTypesProps {
  title: ButtonContent | string;
  className: string | object;
  handlerEvent: HandlerEvent
}

export type HandlerEvent = HandlerClick | HandlerSubmit

interface HandlerClick {
  type: ButtonType.button | ButtonType.reset;
  handler: (e: React.MouseEvent <HTMLButtonElement>) => void,
}

export interface HandlerSubmit {
  type: ButtonType.submit;
  handler: (e: React.FormEvent <HTMLButtonElement>) => void,
}

interface ButtonContent {
  content: React.ReactNode | React.ReactChildren
}

export enum ButtonType {
  submit = 'submit',
  button = 'button',
  reset = 'reset'
}
