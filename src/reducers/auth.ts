import { AuthAction, AuthState, AuthActionTypes } from '../types/auth-types'

const initialState: AuthState = {
  userName: '',
  email: ''
}
export default function (state = initialState, action: AuthAction) : AuthState {
  switch (action.type) {
    case AuthActionTypes.SET_EMAIL:
     return {...state, email: action.payload}
    case AuthActionTypes.SET_USER_NAME:
      return {...state, userName: action.payload}
    case AuthActionTypes.SEND_MESSAGE_RESET:
      return {...state}
    default:
      return state
  }
}
