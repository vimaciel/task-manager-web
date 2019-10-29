import React, { PureComponent, Fragment } from 'react'
import Header from '../components/Header'
import TaskCard from './TaskCard'

export default class PendingTasks extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header title="Pending Tasks" />
                <div className="tasks">
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </div>
            </Fragment>
        )
    }
}
