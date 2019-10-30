export const GET_TASKS = 'GET_TASKS'
export const CREATE_TASK = 'CREATE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
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

export function createTask(task) {
    return {
        type: CREATE_TASK,
        task
    }
}

export function updateTask(task) {
    return {
        type: UPDATE_TASK,
        task
    }
}