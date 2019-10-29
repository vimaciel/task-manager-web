import { combineReducers } from 'redux'
import tasks from './tasks'
import taskForm from './taskForm'

export default combineReducers({
    tasks,
    taskForm
})