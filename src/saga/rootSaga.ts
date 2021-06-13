import { all, fork } from 'redux-saga/effects'

import sagaEmail from './sagas'

export function* rootSaga() {
  yield all([fork(sagaEmail)])
}
