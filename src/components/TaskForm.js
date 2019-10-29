import React, { Component } from 'react'
import Modal from './Modal'

export default class TaskForm extends Component {
    state = {
        showModal: false
    }

    onToggleModal = () => this.setState({ showModal: !this.state.showModal })

    render() {
        return (
            <Modal show={this.state.showModal}>
                <h3>New Task</h3>
                <input type="text" placeholder="Title" />
                <textarea rows="4" cols="10" placeholder="Description" />
                <div className="modal-buttons">
                    <button className="btn-light" onClick={this.onToggleModal}>
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
