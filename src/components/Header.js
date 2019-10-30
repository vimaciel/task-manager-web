import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { setTaskModal } from '../actions/taskModal'

class Header extends PureComponent {
    render() {
        const { title } = this.props
        return (
            <div className="header">
                <h2>{title}</h2>
                <button className="btn-primary" onClick={this.props.openTaskForm}>
                    + New task
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openTaskForm: () => {
            dispatch(setTaskModal(true))
        }
    }
}

export default connect(null, mapDispatchToProps)(Header)