import React from 'react'
import SideMenu from './components/SideMenu'
import PendingTasks from './components/PendingTasks'
import CompletedTasks from './components/CompletedTasks'
import TaskForm from './components/TaskForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container">
        <SideMenu />
        <TaskForm />
        <div className="content">          
          <Switch>
            <Route exact path={['/', '/pending-tasks']} >
              <PendingTasks />
            </Route>
            <Route path="/completed-tasks" >
              <CompletedTasks />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  )
}

export default App
