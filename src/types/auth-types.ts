export interface AuthState {
  userName: string;
  email: string;
}

export enum AuthActionTypes {
  SET_EMAIL = 'SET_EMAIL',
  SET_USER_NAME = 'SET_USER_NAME',
  SEND_MESSAGE_RESET = 'SEND_MESSAGE_RESET'
}

export interface SetEmailAction {
  type: AuthActionTypes.SET_EMAIL;
  payload : string;
}

export interface SetUserNameAction {
  type: AuthActionTypes.SET_USER_NAME;
  payload: string;
}
export interface SendMessageEmailResetAction {
  type: AuthActionTypes.SEND_MESSAGE_RESET
}

export type AuthAction = SetEmailAction| SetUserNameAction | SendMessageEmailResetAction
