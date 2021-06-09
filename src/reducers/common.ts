import { CommonAction, CommonActionTypes, CommonState } from "../types/common-types";

const initialState: CommonState = {
  loading: null,
  error: null,
}


export default function (state = initialState, action: CommonAction) : CommonState {
  switch (action.type) {
    case CommonActionTypes.SET_LOADING:
      return {...state, loading: action.payload }
    case CommonActionTypes.SET_ERROR:
      return { ...state, loading: false, error: action.payload }
    case CommonActionTypes.CLEAR_ERROR:
      return {...state, error: null}
    default:
      return state
  }
}
