import { combineReducers } from 'redux'
import jots from './jots'
import visibilityFilter from './visibilityFilter'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  jots,
  visibilityFilter,
  form: formReducer
})
