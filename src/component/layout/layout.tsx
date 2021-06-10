import React, { FC } from "react";
import { LayoutProps } from "../../types/componets/layout";
import './layout.sass'

const Layout: FC<LayoutProps> = ({ className, children }) =>{
  const classLayout = `layout-container ${ className }`

  return (
    <div className={classLayout }>
      { children }
    </div>
  )
}
export default Layout
