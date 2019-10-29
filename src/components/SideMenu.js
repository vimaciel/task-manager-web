import React, { PureComponent } from 'react'
import { SideOpenedMenuItemFactory, SideClosedMenuItemFactory } from '../helpers/factories'
import { TaskType } from '../helpers/constants'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class SideMenu extends PureComponent {
    state = {
        menuClass: 'side-menu',
        selectedItem: TaskType.PENDING
    }

    componentDidMount() {
        const { location } = this.props
        const { pathname } = location

        if (pathname === '/completed-tasks') {
            this.setState({
                selectedItem: TaskType.COMPLETED
            })

            return
        }

        if (pathname === '/' || pathname === '/pending-tasks') {
            this.setState({
                selectedItem: TaskType.PENDING
            })
        }
    }

    onHumburgerClick = () => {
        let menuClass = 'side-menu'

        if (this.state.menuClass === 'side-menu') {
            menuClass = `${menuClass} opened`
        }

        this.setState({
            menuClass
        })
    }

    render() {
        const { menuClass, selectedItem } = this.state

        if (!selectedItem) {
            return <span>...Loading</span>
        }

        return (
            <nav className={menuClass}>
                <div className="hamburger" onClick={this.onHumburgerClick}>
                    <span />
                    <span />
                    <span />
                </div>
                <div className="menu-opened">
                    <div className="header-menu">
                        <h2>
                            Task Manager
                        </h2>
                    </div>
                    <ul>
                        <SideOpenedMenuItemFactory
                            selectedItem={selectedItem}
                            taskType={TaskType.PENDING}>
                            <h3>Pending Tasks</h3>
                            <p>10 tasks are pending</p>
                        </SideOpenedMenuItemFactory>
                        <SideOpenedMenuItemFactory
                            selectedItem={selectedItem}
                            taskType={TaskType.COMPLETED}>
                            <h3>Completed Tasks</h3>
                            <p>5 tasks were completed</p>
                        </SideOpenedMenuItemFactory>
                    </ul>
                </div>
                <div className="menu-closed">
                    <ul>
                        <SideClosedMenuItemFactory
                            selectedItem={selectedItem}
                            taskType={TaskType.PENDING} />
                        <SideClosedMenuItemFactory
                            selectedItem={selectedItem}
                            taskType={TaskType.COMPLETED} />
                    </ul>
                    <h2>
                        Task Manager
                    </h2>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (_, { location }) => { 
    return {
        location
    }
}


export default withRouter(connect(mapStateToProps)(SideMenu))