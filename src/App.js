import {BrowserRouter, Switch} from 'react-router-dom'

import Login from './components/LoginRoute'
import Home from './components/HomeRoute'
import ProtectedRoute from './components/ProtuctedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
