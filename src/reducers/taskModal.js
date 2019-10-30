import { SET_TASK_MODAL } from '../actions/taskModal'

export default function TaskModal(state = {}, action) {
    switch (action.type) {
        case SET_TASK_MODAL:
            const { show, task } = { ...action }

            return ({
                show,
                task
            })
        default:
            return state
    }
}