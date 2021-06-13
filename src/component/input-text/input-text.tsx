import React, { FC, useState } from "react";
import "./input-text.sass";
import { InputType, InputTypesProps } from "../../types/componets/input-text-types";
import cx from "classnames";
import Button from "../button";
import { ButtonType } from "../../types/componets/button-types";

const InputText: FC <InputTypesProps> = (
  {
    className,
    name,
    label,
    type,
    value,
    onChange,
    autoComplete }) => {

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const changeShowPassword = ():void =>{
    setShowPassword((state) => !state)
  }

  return (
    <div className={ cx(className.classContainer) }>
      <label htmlFor={name} className={ cx(className.classLabel) }>
        { label }
      </label>
      <input
        id={name}
        autoComplete={ autoComplete }
        type={!showPassword ? type : InputType.text}
        name={name}
        className={cx(className.classInput)}
        value={value}
        onChange={onChange}
      />
      {
        type === InputType.password &&
        (
          <Button
            title={ showPassword ? 'Hide' : 'Show' }
            className={'button-show-password'}
            handlerEvent={{type: ButtonType.button, handler: changeShowPassword }}/>
        )
      }
    </div>
  )
}

export default InputText
