import React, { FC } from 'react'
import './login-page.sass'
import Layout from '../../component/layout'
import FormSignIn from '../../component/form-sign-in'

const LoginPage: FC = () => {
  return (
    <Layout className='layout_login-page'>
      <FormSignIn />
    </Layout>
  )
}
export default LoginPage
