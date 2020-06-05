// https://redux.js.org/api/combinereducers
import { combineReducers } from 'redux'
import user from './user'
import events from './todos'

export default combineReducers({ user, events })
