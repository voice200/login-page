import React, { FC } from 'react'
import cx from 'classnames'
import './footer-item.sass'
import { FooterItemTypesProps } from '../../types/componets/footer-item-types'

const FooterItem: FC<FooterItemTypesProps> = ({ title, content, date }) => {
  return (
    <div className={cx('footer-item_container')}>
      <div className={cx('footer-item_title', 'footer-item_title__position')}>
        {title}
      </div>
      <div className={cx('footer-item_content')}>
        <span className={cx('footer-item_date', 'footer-item_date__position')}>
          {date}
        </span>
        {content}
      </div>
    </div>
  )
}

export default FooterItem
