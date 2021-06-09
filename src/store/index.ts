import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()


export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
