import { SET_TASKS_STORE } from '../actions/tasks'

export default function Tasks(state = [], action) {
    switch (action.type) {
        case SET_TASKS_STORE:
            return [
                ...action.tasks
            ]
        default:
            return state
    }
}