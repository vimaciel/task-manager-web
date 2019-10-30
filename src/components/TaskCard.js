import React, { PureComponent } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { setTaskModal } from '../actions/taskModal'
import { updateTask, deleteTask } from '../actions/tasks'

class TaskCard extends PureComponent {
    render() {
        const { task, onEditTask, completeTask, deleteTask } = this.props
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
                    <button className="btn-danger" onClick={_ => deleteTask(task)}>Delete</button>
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
            dispatch(setTaskModal(true, task))
        },
        completeTask: task => {
            task.completed = true
            dispatch(updateTask(task))
        },
        deleteTask: task => {
            dispatch(deleteTask(task))
        }
    }
}


export default connect(null, mapDispatchToProps)(TaskCard)