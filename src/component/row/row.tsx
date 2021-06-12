import React, { FC } from "react";
import cx from 'classnames'
import './row.sass'
import {RowTypesProps} from '../../types/componets/row-types'

const Row: FC <RowTypesProps> = ({
                                   className,
                                   contentLeft,
                                   contentRight}) =>{
  return (
    <div className={cx(className, 'row-container')}>
      {contentLeft}
      {contentRight}
    </div>
  )
}

export default Row
