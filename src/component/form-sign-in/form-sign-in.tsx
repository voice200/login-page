import React, { FC, useState } from "react";
import "./form-sign-in.sass";
import { FormSignInProps } from "../../types/componets/form-sign-in-types";
import Button from "../button";
import { ButtonType } from "../../types/componets/button-types";
import InputText from "../input-text";
import { AutoCompleteType, InputType } from "../../types/componets/input-text-types";
import useHandlerInput from "../../hooks/useHandlerinput";
import cx from 'classnames'
import AppHeader from "../app-header";
import Label from "../label";
import BorderBlock from "../border-block";
import Row from "../row";
import FooterItem from '../footer-item'
import Alert from "../alert";


const FormSignIn: FC<FormSignInProps> = () => {

  const username = useHandlerInput('')
  const password = useHandlerInput('')
  const resetEmail = useHandlerInput('')

  const [showForgotPasswordAlert, setShowForgotPasswordAlert] = useState<boolean>(false)

  const handlerButton = () =>{

  }

  const classNameInput = cx('input-basic-sign-in', 'input-basic-sign-in_position')
  const classNameInputText = {
    classInput: classNameInput,
    classLabel: 'label-basic-sign-in',
    classContainer: 'container-basic-sign-in'
  }

  const classNameInputAlert = cx('input-basic-alert', 'input-basic-sign-in_position')
  const classNameInputTextAlert = {
    classInput: classNameInputAlert,
    classLabel: 'label-basic-sign-in',
    classContainer: 'container-basic-sign-in'
  }

  const classHeaderTitle = cx('title-sign-in', 'title-sign-in__position')
  const classHeaderSubtitle = cx('subtitle-sign-in', 'subtitle-sign-in__position')
  const classNameAppHeader = {
    classTitle: classHeaderTitle,
    classSubtitle: classHeaderSubtitle,
    classContainer : ''
  }

  const footerLeft = <FooterItem
    title={'Latest blog post'}
    date={'October 15, 2018'}
    content={'Create Efficiency with a Creative Asset Management Platform'}/>

  const footerRight = <FooterItem
    title={'Recent tweet'}
    content={'#HenryStewartEvents are bringing their #CreativeOps show to NYC for the third…'} date={'April 25, 2018'} />

  const changeShowForgotPasswordAlert = (forgot: boolean = false ):void =>{
    if (forgot) {
      setShowForgotPasswordAlert(true)
      return
    }
    setShowForgotPasswordAlert(state => !state)
  }

  return (
    <div className='form-sign-in_container'>
      <div className={'form-sign-in_container_content'}>
        <AppHeader
          title={'Welcome'}
          subtitle={'Please sign in to continue'}
          className={ classNameAppHeader }
          needBorder={true}/>
        <Label className={cx('label_sign-in', 'label_sign-in__position')}/>
        <InputText
          className={classNameInputText}
          name={'username'}
          label={'Username'}
          type={InputType.text}
          autoComplete={AutoCompleteType.off}
          { ...username } />
        <InputText
          className={classNameInputText}
          name={'password'}
          label={'Password'}
          type={InputType.password}
          autoComplete={AutoCompleteType.off}
          { ...password } />
          <Row
            className={'row-container_buttons__position'}
            contentLeft={
              <Button title={'Sign In'}
              className={'button-sign-in'}
              handlerEvent={ {type: ButtonType.button, handler: handlerButton} } />
          }
            contentRight={
              <Button title={'Forgot password?'}
              className={'button-forgot-password'}
              handlerEvent={ {type: ButtonType.button, handler: ()=>{changeShowForgotPasswordAlert(true)}} } />} />
        <BorderBlock/>
        <Row
          className={'row-container_footer__position'}
          contentLeft={footerLeft}
          contentRight={footerRight} />
      </div>
      {
        showForgotPasswordAlert && (
          <Alert confirm={true} title={'Password Reset'} changeShowAlert={()=>changeShowForgotPasswordAlert(false)}>
            <div className={cx('alert_container_content')}>
              <div className={'alert_content'}>
                Please enter the email address associated with your globaledit account to reset your password.
              </div>
              <InputText
                className={classNameInputTextAlert}
                name={'resetEmail'}
                label={'Email Address'}
                type={InputType.text}
                autoComplete={AutoCompleteType.off}
                { ...resetEmail } />
            </div>
          </Alert>
        )
      }
    </div>
  )
}

export default FormSignIn
