import React, { FC } from 'react'
import cx from 'classnames'
import { AppHeaderProps } from '../../types/componets/app-header'
import './app-header.sass'
import BorderBlock from '../border-block'

const AppHeader: FC<AppHeaderProps> = ({
  title,
  subtitle,
  className,
  needBorder,
}) => {
  return (
    <header className={cx('app-header-container', className.classContainer)}>
      <div className={cx(className.classTitle)}>{title}</div>
      <div className={cx(className.classSubtitle)}>{subtitle}</div>
      {needBorder && <BorderBlock />}
    </header>
  )
}

export default AppHeader
