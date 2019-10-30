import { combineReducers } from 'redux'
import tasks from './tasks'
import taskModal from './taskModal'
import page from './page'

export default combineReducers({
    tasks,
    taskModal,
    page
})