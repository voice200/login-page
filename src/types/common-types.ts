export interface CommonState {
  loading: null | boolean;
  error: null | string;
}

export enum CommonActionTypes {
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR'
}

export interface SetLoadingAction {
  type: CommonActionTypes.SET_LOADING;
  payload: boolean;
}
export interface SetErrorAction {
  type: CommonActionTypes.SET_ERROR;
  payload: string
}
export interface ClearErrorAction {
  type: CommonActionTypes.CLEAR_ERROR;
}

export type CommonAction = SetLoadingAction | SetErrorAction | ClearErrorAction
