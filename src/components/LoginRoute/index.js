import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

import userDetails from '../../common/constants.json'

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
    const UserDetails = {
      name: 'raefweqwul',
      username: 'raerewwererw4rrryhutyl123',
      password: 'rahulog456',
      gender: 'Male',
      location: 'hyderabad',
    }

    console.log(UserDetails)

    const apiUrl = 'https://node-app-production-95b9.up.railway.app/users'
    const options = {
      method: 'POST',
      body: UserDetails,
      ContentType: 'application/json',
    }

    // console.log('response')

    // // fetch('/api/v1/users', {
    // //   method: 'post',
    // //   headers: {'Content-Type': 'application/json'},
    // //   body: JSON.stringify({
    // //     user: {
    // //       email: email,
    // //       password: password,
    // //     },
    // //   }),
    // // })

    const response = await fetch(apiUrl, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(UserDetails),
    })

    const data = await response.json()

    console.log(response)

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
