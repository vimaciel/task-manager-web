import { put, takeEvery, call } from 'redux-saga/effects'
import { GET_TASKS, setTasksStore } from '../actions/tasks'
import * as api from '../helpers/taskApi'

export function* getTasksWatcher() {
    yield takeEvery(GET_TASKS, getTasks)
}

function* getTasks({ onlyCompleted }) {
    const { data } = yield call(api.getTasks, onlyCompleted)
    yield put(setTasksStore(data))
}