import React from 'react'

export interface InputTypesProps {
  className: classesInput;
  name: string,
  label: string,
  value: InputValue
  type: InputType
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  autoComplete: AutoCompleteType
}
export type InputValue = string | number

export interface classesInput {
  classInput: string | {}
  classLabel: string | {}
  classContainer : string | {}
}
export enum AutoCompleteType {
  off = 'off',
  on = 'on'
}

export enum InputType {
  text = 'text',
  textarea = 'textarea',
  number = 'number',
  password = "password"
}
