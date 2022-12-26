import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccessSubmit = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  OnSubmitSuccess = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const UserDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessSubmit(data.jwt_token)
    }
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <>
        <label className="Label-User" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          className="Label-input"
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordList = () => {
    const {password} = this.state
    return (
      <>
        <label className="Label-Password" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="Label-password-input"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderLagOutButton = () => (
    <>
      <button className="Login-Button" type="submit">
        Login
      </button>
    </>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="Login-container">
        <div className="Login1-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="Website-Logo"
          />
          <form onSubmit={this.OnSubmitSuccess}>
            <div className="Form-container">{this.renderUserName()}</div>
            <div className="Form-container">{this.renderPasswordList()}</div>
            <div className="Form-container">{this.renderLagOutButton()}</div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
