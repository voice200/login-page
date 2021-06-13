import { createSelector } from 'reselect'
import { RootState } from '../reducers'

export const getEmail = (state: RootState) => state.auth.email

export const getEmailSelector = createSelector(getEmail, (email) => email)
