import React, { PureComponent } from 'react'
import tasksToDo from '../assets/tasks-to-do.png'
import tasksToDoGray from '../assets/tasks-to-do-gray.png'
import tasksFinished from '../assets/tasks-finished.png'
import tasksFinishedGray from '../assets/tasks-finished-gray.png'

export default class SideMenu extends PureComponent {
    render() {
        return (
            <nav className="side-menu">
                <div className="hamburger">
                    <span />
                    <span />
                    <span />
                </div>
                <div className="menu-opened">
                    <div className="header">
                        <h2>
                            Task Manager
                        </h2>
                    </div>
                    <ul>
                        <li className="selected">
                            <a>
                                <img className="menu-icon" src={tasksToDo} />
                                <div>
                                    <h3>Pending Tasks</h3>
                                    <p>10 tasks are pending</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img className="menu-icon" src={tasksFinishedGray} />
                                <div>
                                    <h3>Completed Tasks</h3>
                                    <p>5 tasks were completed</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="menu-closed">
                    <ul>
                        <li>
                            <a>
                                <img src={tasksToDo} width="50px" height="50px" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={tasksFinishedGray} width="50px" height="50px" />
                            </a>
                        </li>                       
                    </ul>
                    <h2>
                        Task Manager
                    </h2>
                </div>
            </nav>
        )
    }
}