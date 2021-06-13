import React, { FC } from 'react'
import './label.sass'
import logo from './logo.svg'
import { LabelTypesProps } from '../../types/componets/label-types'
import cx from 'classnames'

const Label: FC<LabelTypesProps> = ({ className }) => {
  return (
    <div className={cx(className)}>
      <img src={logo} alt='label' />
    </div>
  )
}

export default Label
