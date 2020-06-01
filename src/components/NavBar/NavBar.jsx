import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = props => {
  const nav = props.user ? (
    <div>
      <div className='NavClass'>

        <Link to='/about' className='NavBar-link'>
          ABOUT
        </Link>

        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

        <Link to='/game' className='NavBar-link'>
          SQUARES
        </Link>

        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

        {/* <Link to='/picks' className='NavBar-link'>
        PICKS
      </Link>

      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; */}

        <Link to='' className='NavBar-link' onClick={props.handleLogout}>
          LOG OUT
        </Link>

        {/* &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; */}
      </div>

      <p className='NavBar-Welcome'>Welcome, {props.user.name}</p>
    </div>
  ) : (
    <div className='NavClass'>

      <Link to='/login' className='NavBar-link'>
        LOG IN
      </Link>

      &nbsp;&nbsp;|&nbsp;&nbsp;

      <Link to='/signup' className='NavBar-link'>
        SIGN UP
      </Link>

    </div>
  )

  return <div className='NavBar'>{nav}</div>
}

export default NavBar
