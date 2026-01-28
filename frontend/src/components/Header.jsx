import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const HeaderLinks = (
    <>
    <NavLink to='/Login'>Login</NavLink>
    <NavLink to='/SignUp'>SignUp</NavLink>
   </>
  )
  return (
    <div className='w-full h-12 bg-blue-300'>{HeaderLinks}</div>
  )
}

export default Header