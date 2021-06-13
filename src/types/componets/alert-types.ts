import { ReactChildren, ReactNode } from 'react'

export interface AlertTypesProps {
  confirm: boolean
  title: string
  children: ReactChildren | ReactNode
  changeShowAlert: () => void
  opened: boolean
  resetEmail?: () => void
}
