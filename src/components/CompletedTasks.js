import React, { PureComponent, Fragment } from 'react'
import Header from './Header'
import TaskCard from './TaskCard'
import { connect } from 'react-redux'
import { getTasks } from '../actions/tasks'

class CompletedTasks extends PureComponent {
    componentDidMount(){
        this.props.getCompletedTasks()
    }

    render() {
        const { tasks } = this.props

        return (
            <Fragment>
                <Header title="Completed Tasks"/>
                <div className="tasks">
                    {tasks.map(task => (
                        <TaskCard key={task.id} task={task}/>                    
                    ))}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ tasks }) => {
    return {
        tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCompletedTasks: () => {
            dispatch(getTasks(true))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompletedTasks)
