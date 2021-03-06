import { combineReducers } from 'redux'
import auth from './auth'

export const rootReducer = combineReducers({
  auth,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
