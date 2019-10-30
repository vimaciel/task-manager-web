export const GET_TASKS = 'GET_TASKS'
export const SET_TASKS_STORE = 'GET_TASKS_STORE'

export function getTasks(onlyCompleted = false) {
    return {
        type: GET_TASKS,
        onlyCompleted
    }
}

export function setTasksStore(tasks) {
    return {
        type: SET_TASKS_STORE,
        tasks
    }
}