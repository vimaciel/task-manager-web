import { expectSaga } from 'redux-saga-test-plan'
import { getTasks } from '../sagas/tasks'
import { setTasksStore } from '../actions/tasks'
import { setPage } from '../actions/page'
import * as matchers from 'redux-saga-test-plan/matchers'
import * as api from '../helpers/taskApi'


const apiReturns = {
    success: true,
    data: [
        {
            title: "Test task",
            description: "Just a simple description",
            createdAt: 1572456774444,
            completed: false,
        },       
    ]
}

it('Test getTasks saga', () => {
    return expectSaga(getTasks, { onlyCompleted: true })
        .provide([
            [matchers.call.fn(api.getTasks), apiReturns]
        ])
        .put(setTasksStore(apiReturns.data))
        .put(setPage('completed'))
        .run()
})