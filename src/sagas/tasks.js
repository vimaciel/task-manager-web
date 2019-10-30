import { put, takeEvery, call } from 'redux-saga/effects'
import { GET_TASKS, setTasksStore, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from '../actions/tasks'
import { setTaskModal } from '../actions/taskModal'
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

export function* deleteTaskWatcher() {
    yield takeEvery(UPDATE_TASK, deleteTask)
}

function* getTasks({ onlyCompleted }) {
    const { data } = yield call(api.getTasks, onlyCompleted)
    yield put(setTasksStore(data))
}

function* createTask({ task }) {
    yield call(api.createTask, task)    
    yield put(setTaskModal(false))
}

function* updateTask({ task }) {
    yield call(api.updateTask, task)    
    yield put(setTaskModal(false))
}

function* deleteTask({ task }) {
    yield call(api.deleteTask, task)    
    yield put(setTaskModal(false))
}