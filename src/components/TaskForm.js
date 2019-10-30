import React, { PureComponent } from 'react'
import Modal from './Modal'
import { connect } from 'react-redux'
import _ from 'lodash'
import { setTaskForm } from '../actions/taskForm'
import { createTask, updateTask } from '../actions/tasks'

class TaskForm extends PureComponent {
    state = {
        show: false,
        task: null,
        title: '',
        description: ''
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
        const { taskForm, createTask, updateTask } = this.props
        const { task } = taskForm
        const { description, title } = this.state

        if (task) {
            task.description = description
            task.title = title
            updateTask(task)
            return
        }

        createTask({ description, title })
    }

    render() {
        const { title, description, show } = this.state
        const { taskForm } = this.props
        const { task } = taskForm

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

const mapStateToProps = ({ taskForm }) => {
    return {
        taskForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeTaskForm: () => {
            dispatch(setTaskForm(false))
        },

        updateTask: task => {
            dispatch(updateTask(task))
        },

        createTask: task => {
            dispatch(createTask(task))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)