import { combineReducers } from 'redux'
import tasks from './tasks'
import taskModal from './taskModal'

export default combineReducers({
    tasks,
    taskModal
})