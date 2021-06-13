import React, { FC, useEffect, useRef, useState } from 'react'
import './input-text.sass'
import {
  InputType,
  InputTypesProps,
} from '../../types/componets/input-text-types'
import cx from 'classnames'
import Button from '../button'
import { ButtonType } from '../../types/componets/button-types'

const InputText: FC<InputTypesProps> = ({
  className,
  name,
  label,
  type,
  value,
  onChange,
  autoComplete,
  needFocus,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const inputRef = useRef(null)

  const changeShowPassword = (): void => {
    setShowPassword((state) => !state)
  }
  useEffect((): void => {
    if (needFocus && inputRef) {
      // @ts-ignore
      inputRef?.current.focus()
    }
  }, [needFocus])

  return (
    <div className={cx(className.classContainer)}>
      <label htmlFor={name} className={cx(className.classLabel)}>
        {label}
      </label>
      <input
        id={name}
        autoComplete={autoComplete}
        type={!showPassword ? type : InputType.text}
        name={name}
        className={cx(className.classInput)}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
      {type === InputType.password && (
        <Button
          title={showPassword ? 'Hide' : 'Show'}
          className={'button-show-password'}
          handlerEvent={{
            type: ButtonType.button,
            handler: changeShowPassword,
          }}
        />
      )}
    </div>
  )
}

export default InputText
