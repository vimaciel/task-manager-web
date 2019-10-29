export const SET_TASK_FORM = 'SET_TASK_FORM'

export function setTaskForm(show, task = null) {
    return {
        type: SET_TASK_FORM,
        show,
        task
    }
}