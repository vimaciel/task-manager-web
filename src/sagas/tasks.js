import { put, takeEvery, call } from 'redux-saga/effects'
import { GET_TASKS, setTasksStore, CREATE_TASK, UPDATE_TASK } from '../actions/tasks'
import { setTaskForm } from '../actions/taskForm'
import * as api from '../helpers/taskApi'

export function* getTasksWatcher() {
    yield takeEvery(GET_TASKS, getTasks)
}

export function* createTaskWatcher() {
    yield takeEvery(CREATE_TASK, createTask)
}

export function* updateTaskWatcher() {
    yield takeEvery(UPDATE_TASK, updateTask)
}

function* getTasks({ onlyCompleted }) {
    const { data } = yield call(api.getTasks, onlyCompleted)
    yield put(setTasksStore(data))
}

function* createTask({ task }) {
    const { data } = yield call(api.createTask, task)
    yield getTasks({ onlyCompleted: false })
    yield put(setTaskForm(false))
}

function* updateTask({ task }) {
    const { data } = yield call(api.updateTask, task)
    yield getTasks({ onlyCompleted: false })
    yield put(setTaskForm(false))
}