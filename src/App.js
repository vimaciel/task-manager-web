import React from 'react'
import SideMenu from './components/SideMenu'
import PendingTasks from './components/PendingTasks'
import FinishedTasks from './components/FinishedTasks'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container">
        <SideMenu />
        <Switch>
          <Route exact path={['/', '/pending-tasks']} >
            <PendingTasks />
          </Route>
          <Route path="/finished-tasks" >
            <FinishedTasks />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

export default App
