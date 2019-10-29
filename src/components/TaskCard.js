import React, { Component } from 'react'

class TaskCard extends Component {
    render() {
        return (
            <div className="task-card">               

                <h2>Title</h2>
                <div className="dates">
                    <h3>Created: 29/10/2019 18:00</h3>
                    <h3>Updated: 29/10/2019 18:00</h3>
                </div>
                <p>description ...</p>
                
                <div className="buttons">
                    <button className="btn-danger">Delete</button>
                    <button className="btn-light">Edit</button>
                </div>
            </div>
        );
    }
}

export default TaskCard