import React, { PureComponent } from 'react'

export default class SideMenu extends PureComponent {
    render() {
        return (
            <nav className="side-menu">
                <div className="menu-opened">
                    <div className="header">
                        <h2>
                            Task Manager
                        </h2>
                    </div>
                    <ul>
                        <li className="selected">
                            <a>
                                <h3>Pending Tasks</h3>
                                <p>10 tasks are pending</p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <h3>Completed Tasks</h3>
                                <p>5 tasks were completed</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="menu-closed">
                    
                </div>
            </nav>
        )
    }
}