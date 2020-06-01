import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import userService from '../../utils/userService'

import './Header.css'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      user: userService.getUser()
    }
  }

  /*--- Lifecycle Methods ---*/

  handleLogout = props => {
    userService.logout(props)
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  render () {
    return (
      <div id='main-header'>
        <header className='header-footer'>
          <Link to='' className='header-link'>
            S Q U A R E S &nbsp; O F &nbsp; S U C C E S S
          </Link>
        </header>
      </div>
    )
  }
}

export default Header
