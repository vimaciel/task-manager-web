import { SET_TASK_FORM } from '../actions/taskForm'

export default function TaskForm(state = {}, action) {
    switch (action.type) {
        case SET_TASK_FORM:
            const { show, task } = { ...action }

            return ({
                show,
                task
            })
        default:
            return state
    }
}