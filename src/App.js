import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './components/LoginRoute'
import Home from './components/HomeRoute'
import ProtectedRoute from './components/ProtuctedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
