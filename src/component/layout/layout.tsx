import React, { FC } from "react";
import { LayoutProps } from "../../types/componets/layout-types";
import './layout.sass'
import cx from 'classnames'

const Layout: FC<LayoutProps> = ({ className, children }) =>{

  return (
    <div className={cx('layout-container', className) }>
      { children }
    </div>
  )
}
export default Layout
