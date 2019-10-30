import React, { PureComponent, Fragment } from 'react'
import Header from '../components/Header'
import TaskCard from './TaskCard'
import { connect } from 'react-redux'
import { getTasks } from '../actions/tasks'

class PendingTasks extends PureComponent {
    componentDidMount(){
        this.props.getPendingTasks()
    }

    render() {
        const { tasks } = this.props

        return (
            <Fragment>
                <Header title="Pending Tasks" />                
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
        getPendingTasks: () => {
            dispatch(getTasks())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PendingTasks)
