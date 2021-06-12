import React, {FC} from "react";
import cx from 'classnames'
import { BorderBlockTypesProps } from '../../types/componets/border-block-types'
import './border-block.sass'

const BorderBlock: FC <BorderBlockTypesProps> = ({className}) =>{
  return (
    <div className={cx('border-block', className)}>
    </div>
  )
}
// @ts-ignore
export default BorderBlock
