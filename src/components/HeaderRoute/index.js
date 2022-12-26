import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const OnClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <div className="Header-List">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="Website logo"
        />
        <ul className="unOrderedList">
          <li>
            <Link className="Home" to="/">
              Home
            </Link>
          </li>
        </ul>
        <button type="button" onClick={OnClickLogout}>
          Logout
        </button>
      </div>
    </>
  )
}
export default withRouter(Header)
