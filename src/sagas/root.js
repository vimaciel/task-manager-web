import { all, fork } from 'redux-saga/effects'
import { getTasksWatcher } from './tasks'

export default function* rootSaga() {
    yield all([
        fork(getTasksWatcher)
    ])
}