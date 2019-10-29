import { combineReducers } from 'redux'
import task from './task'
import tasks from './tasks'

export default combineReducers({
    task,
    tasks
})