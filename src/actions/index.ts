import { CommonActionTypes, SetLoadingAction, ClearErrorAction, SetErrorAction } from "../types/common-types";
import {SetEmailAction, AuthActionTypes, SetUserNameAction, SendMessageEmailResetAction} from '../types/auth-types'
import { ActionCreator } from "redux";

export const setLoading: ActionCreator<SetLoadingAction> = (payload: boolean) =>({
  type: CommonActionTypes.SET_LOADING,
  payload
})

export const setError: ActionCreator<SetErrorAction> = (payload: string) =>({
  type: CommonActionTypes.SET_ERROR,
  payload
})

export const clearError: ActionCreator<ClearErrorAction> = () =>({
  type: CommonActionTypes.CLEAR_ERROR,
})

export const setEmail: ActionCreator<SetEmailAction> = (payload: string) =>({
  type: AuthActionTypes.SET_EMAIL,
  payload
})

export const setUserName: ActionCreator<SetUserNameAction> = (payload: string) =>({
  type: AuthActionTypes.SET_USER_NAME,
  payload
})

export const sendMessageEmailReset: ActionCreator<SendMessageEmailResetAction> = () =>({
  type: AuthActionTypes.SEND_MESSAGE_RESET
})
