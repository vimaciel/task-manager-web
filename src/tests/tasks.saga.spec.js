import { expectSaga } from 'redux-saga-test-plan'
import * as sagas from '../sagas/tasks'
import { setTasksStore, getTasks, createTask, updateTask, deleteTask } from '../actions/tasks'
import { setTaskModal } from '../actions/taskModal'
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

const storeState = {
    page: 'pending'
}

describe('Testing task sagas', () => {
    it('Testing getTasksWatcher saga', () => {
        return expectSaga(sagas.getTasksWatcher)
            .provide([
                [matchers.call.fn(api.getTasks), apiReturns]
            ])
            .put(setTasksStore(apiReturns.data))
            .put(setPage('completed'))
            .dispatch(getTasks(true))
            .run()
    })

    it('Testing createTaskWatcher saga', () => {
        const newTask = {
            title: 'New task',
            description: 'A simple description'
        }

        return expectSaga(sagas.createTaskWatcher)
            .withState(storeState)
            .provide([
                [matchers.call.fn(api.createTask)]
            ])
            .put(setTaskModal(false))
            .dispatch(createTask(newTask))
            .run()
    })

    it('Testing updateTaskWatcher saga', () => {
        const taskUpdated = {
            title: 'Update the task',
            description: 'It was updated'
        }

        return expectSaga(sagas.updateTaskWatcher)
            .withState(storeState)
            .provide([
                [matchers.call.fn(api.updateTask)]
            ])
            .put(setTaskModal(false))
            .dispatch(updateTask(taskUpdated))
            .run()
    })

    it('Testing deleteTaskWatcher saga', () => {
        const taskToDelete = {
            title: 'Just delete',
            description: 'I do not want this task anymore'
        }

        return expectSaga(sagas.deleteTaskWatcher)
            .withState(storeState)
            .provide([
                [matchers.call.fn(api.deleteTask)]
            ])            
            .dispatch(deleteTask(taskToDelete))
            .run()
    })
})

