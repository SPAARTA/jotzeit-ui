import { combineReducers } from 'redux'
import jots from './jots'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  jots,
  visibilityFilter
})
