import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../reducers'

// @ts-ignore
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
