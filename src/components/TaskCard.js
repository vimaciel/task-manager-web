import React, { PureComponent } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { setTaskForm } from '../actions/taskForm'
import { updateTask } from '../actions/tasks'

class TaskCard extends PureComponent {
    render() {
        const { task, onEditTask, completeTask } = this.props
        const { title, description, createdAt, updatedAt, completed } = task
        

        return (
            <div className="task-card">
                <h2>{title}</h2>
                <div className="dates">
                    <h3>Created: {moment(createdAt).format('LLL')}</h3>
                    {updatedAt && <h3>Updated: {moment(updatedAt).format('LLL')}</h3>}
                </div>
                <p>{description}</p>

                <div className="buttons">
                    <button className="btn-danger">Delete</button>
                    <button className="btn-light" onClick={_ => onEditTask(task)}>Edit</button>
                    {!completed && <button className="btn-primary" onClick={_ => completeTask(task)}>Complete</button>}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditTask: task => {
            dispatch(setTaskForm(true, task))
        },
        completeTask: task => {
            task.completed = true
            dispatch(updateTask(task))
        }
    }
}


export default connect(null, mapDispatchToProps)(TaskCard)