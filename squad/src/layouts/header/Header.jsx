import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/about'}>about</NavLink>
            <NavLink to={'/contact'}>contact</NavLink>
            <NavLink to={'/modal'}>modal</NavLink>
        </nav>
    </div>
  )
}

export default Header