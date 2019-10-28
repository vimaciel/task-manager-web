import React, { Component } from 'react'
import Modal from './Modal'

export default class TaskForm extends Component {
    render() {
        return (
            <Modal show>
                <h3>New Task</h3>
                <input type="text" placeholder="Title" />
                <textarea rows="4" cols="10" placeholder="Description" />
                <div className="modal-buttons">
                    <button className="btn-light">
                        Cancel
                    </button>
                    <button className="btn-primary">
                        Create
                    </button>
                </div>
            </Modal>
        )
    }
}
