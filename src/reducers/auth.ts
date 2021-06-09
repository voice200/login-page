const initialState: AuthState = {
  userName: null,
  accessToken: null,
  userId: null,
}
export default function (state = initialState, action: AuthAction) : AuthState {
  switch (action.type) {
    default:
      return state
  }
}
