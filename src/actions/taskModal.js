export const SET_TASK_MODAL = 'SET_TASK_MODAL'

export function setTaskModal(show, task = null) {
    return {
        type: SET_TASK_MODAL,
        show,
        task
    }
}