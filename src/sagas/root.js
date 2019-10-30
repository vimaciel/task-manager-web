import { all, fork } from 'redux-saga/effects'
import { getTasksWatcher, createTaskWatcher, updateTaskWatcher } from './tasks'

export default function* rootSaga() {
    yield all([
        fork(getTasksWatcher),
        fork(createTaskWatcher),
        fork(updateTaskWatcher)
    ])
}