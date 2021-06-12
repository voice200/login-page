import React, { FC } from "react";
import './button.sass'
import { ButtonTypesProps } from "../../types/componets/button-types";
import cx from 'classnames'
import useHandlerButton from "../../hooks/useHandlerButton";

const Button: FC <ButtonTypesProps> = ({ handlerEvent, title, className,}) =>{

  const handler = useHandlerButton(handlerEvent)

  return (
    <button
      type={ handlerEvent.type }
      className={cx( className, 'button-basic-style') }
      {...handler}
    >
      { title }
    </button>
  )
}

export default Button;
