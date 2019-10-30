import React, { PureComponent } from 'react'
import moment from 'moment'

class TaskCard extends PureComponent {
    render() {
        const { task } = this.props
        const { id, title, description, createdAt, updatedAt } = task


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
                    <button className="btn-light">Edit</button>
                </div>
            </div>
        )
    }
}

export default TaskCard