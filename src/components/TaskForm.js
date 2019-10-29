import React, { PureComponent } from 'react'
import Modal from './Modal'
import { connect } from 'react-redux'
import _ from 'lodash'
import { setTaskForm } from '../actions/taskForm'

class TaskForm extends PureComponent {
    state = {
        show: false,
        task: null
    }

    componentDidUpdate(prevProps) {
        if (prevProps.taskForm !== this.props.taskForm) {
            this.onInit()
        }
    }

    componentDidMount() {
        this.onInit()
    }

    onInit = () => {
        const { taskForm } = this.props
        if (!_.isEmpty(taskForm)) {
            const { task, show } = taskForm
            this.setState({
                task,
                show
            })
        }
    }

    render() {
        return (
            <Modal show={this.state.show}>
                <h3>New Task</h3>
                <input type="text" placeholder="Title" />
                <textarea rows="4" cols="10" placeholder="Description" />
                <div className="modal-buttons">
                    <button className="btn-light" onClick={this.props.closeTaskForm}>
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

const mapStateToProps = ({ taskForm }) => {
    return {
        taskForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeTaskForm: () => {
            dispatch(setTaskForm(false))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)