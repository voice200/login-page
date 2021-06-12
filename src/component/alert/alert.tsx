import React, { FC } from "react";
import { AlertTypesProps } from "../../types/componets/alert-types";
import "./alert.sass";
import cx from "classnames";
import Button from "../button";
import Row from "../row";
import { ButtonType } from "../../types/componets/button-types";

const Alert: FC <AlertTypesProps> = (
  {
    confirm,
    children,
    changeShowAlert,
    title}) => {

  const buttonLeft = (
    <Button title={'Submit'} className={'button-alert-submit'} handlerEvent={{type: ButtonType.button, handler:changeShowAlert}} />
  )
  const buttonRight = (
    <Button title={'Cancel'} className={cx('button-alert-cancel', 'button-alert-cancel__position')} handlerEvent={{type: ButtonType.button, handler:changeShowAlert}} />
  )
  return (
    <div className={cx('alert_container')}>
      <div className={cx('alert_header')}>
        <div>
          {title}
        </div>
        <Button title={''} className={'button-alert-cross'} handlerEvent={{type: ButtonType.button, handler:changeShowAlert}} />
      </div>
      {children}
      {
        confirm && (
          <Row className={cx('row-container-alert')} contentLeft={buttonLeft} contentRight={buttonRight}/>
        )
      }
    </div>
  )
}

export default Alert
