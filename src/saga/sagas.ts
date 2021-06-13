import WorkService from '../service/index'
import { put, takeLatest, select, call } from 'redux-saga/effects'
import { clearError, setLoading, setError } from '../actions'
import { AuthActionTypes } from '../types/auth-types'
import { getEmail } from './selectores'

const server = new WorkService()

function* sendMessageResetWorker() {
  try {
    // @ts-ignore
    const email = yield select(getEmail)
    yield put(clearError())
    yield put(setLoading(true))
    // @ts-ignore
    yield call(server.resetPasswordTest(email))
  } catch (e) {
    yield put(setLoading(false))
    yield put(setError(e.message))
  }
}

function* sendMessageWatcher() {
  yield takeLatest(AuthActionTypes.SEND_MESSAGE_RESET, sendMessageResetWorker)
}

export default sendMessageWatcher
