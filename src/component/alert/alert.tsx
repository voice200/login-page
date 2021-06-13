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
    title,
    opened,
    resetEmail= ()=>{}}) => {

  const buttonLeft = (
    <Button title={'Submit'} className={'button-alert-submit'} handlerEvent={{type: ButtonType.button, handler: resetEmail}} />
  )
  const buttonRight = (
    <Button title={'Cancel'} className={cx('button-alert-cancel', 'button-alert-cancel__position')} handlerEvent={{type: ButtonType.button, handler:changeShowAlert}} />
  )

  const cross = (
    <div className={'cross'}>
      <div className={'cross-left'}></div>
      <div className={'cross-right'}></div>
    </div>
  )
  return (
    <div className={cx('alert_container', 'alert', {
      'wrapper_active': opened,
      'wrapper_inactive': !opened
    })}>
      <div className={cx('alert_header')}>
        <div>
          {title}
        </div>
        <Button title={ cross } className={'button-alert-cross'} handlerEvent={{type: ButtonType.button, handler:changeShowAlert}} />
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
