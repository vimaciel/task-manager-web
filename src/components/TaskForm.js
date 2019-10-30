import React, { PureComponent } from 'react'
import Modal from './Modal'
import { connect } from 'react-redux'
import _ from 'lodash'
import { setTaskModal } from '../actions/taskModal'
import { createTask, updateTask } from '../actions/tasks'
import { withRouter } from 'react-router-dom'

class TaskForm extends PureComponent {
    state = {
        show: false,
        task: null,
        title: '',
        description: ''
    }

    componentDidUpdate(prevProps) {
        if (prevProps.taskModal !== this.props.taskModal) {
            this.onInit()
        }
    }

    componentDidMount() {
        this.onInit()
    }

    onInit = () => {
        const { taskModal } = this.props
        if (!_.isEmpty(taskModal)) {
            const { task, show } = taskModal
            this.setState({
                description: task ? task.description : '',
                title: task ? task.title : '',
                show
            })
        }
    }

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    onDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    onSave = () => {
        const { taskModal, createTask, updateTask, history } = this.props
        const { task } = taskModal
        const { description, title } = this.state

        if (task) {
            task.description = description
            task.title = title
            updateTask(task)            
            history.push(task.completed ? '/completed-tasks' : '/pending-tasks')    
            return
        }

        createTask({ description, title })
        history.push('/pending-tasks')
    }

    render() {
        const { title, description, show } = this.state
        const { taskModal } = this.props
        const { task } = taskModal

        const modalTitle = task ? 'Edit Task' : 'New Task'
        const saveTitle = task ? 'Update' : 'Create'

        return (
            <Modal show={show}>
                <h3>{modalTitle}</h3>
                <input type="text" placeholder="Title" value={title} onChange={this.onTitleChange} />
                <textarea rows="4" cols="10" placeholder="Description" value={description} onChange={this.onDescriptionChange} />
                <div className="modal-buttons">
                    <button className="btn-light" onClick={this.props.closeTaskForm}>
                        Cancel
                    </button>
                    <button className="btn-primary" onClick={this.onSave}>
                        {saveTitle}
                    </button>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = ({ taskModal }) => {
    return {
        taskModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeTaskForm: () => {
            dispatch(setTaskModal(false))
        },

        updateTask: task => {
            dispatch(updateTask(task))
        },

        createTask: task => {
            dispatch(createTask(task))
        }

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskForm))