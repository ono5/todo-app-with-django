// https://redux.js.org/api/combinereducers
import { combineReducers } from 'redux'
import user from './user'
import todos from './todos'
import url from './url'

export default combineReducers({ user, todos, url })
