import React from 'react'
import SideMenu from './components/SideMenu'
import PendingTasks from './components/PendingTasks'
import FinishedTasks from './components/FinishedTasks'
import TaskForm from './components/TaskForm'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container">
        <SideMenu />
        <TaskForm />
        <div className="content">
          <Header />
          <Switch>
            <Route exact path={['/', '/pending-tasks']} >
              <PendingTasks />
            </Route>
            <Route path="/finished-tasks" >
              <FinishedTasks />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  )
}

export default App
