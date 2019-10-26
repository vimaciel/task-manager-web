import React, { PureComponent } from 'react'

export default class SideMenu extends PureComponent {
    render() {
        return (
            <div className="side-menu">
                <div className="header">
                    <h2>
                        Task Manager
                    </h2>
                </div>
                <a className="selected">
                    <h3>Pending Tasks</h3>
                    <p>10 tasks are pending</p>
                </a>
                <a>
                    <h3>Completed Tasks</h3>
                    <p>5 tasks were completed</p>
                </a>
            </div>
        )
    }
}