import { combineReducers } from "redux"
import localeReducers from './localeReducers'
import todoReducers from './todoReducers'

export default combineReducers({ localeReducers, todoReducers })
