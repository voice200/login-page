interface AuthState {
  userName: string | null;
  accessToken: null | string;
  userId: null | string;
}

interface AuthAction {
  type: string;
  payload? : any;
}
