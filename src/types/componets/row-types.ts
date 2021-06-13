import { ReactNode, ReactChildren } from 'react'

export interface RowTypesProps {
  className?: string
  contentLeft: ReactNode | ReactChildren
  contentRight: ReactNode | ReactChildren
}
