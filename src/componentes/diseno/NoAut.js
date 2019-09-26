import React from 'react'
import { NavLink } from 'react-router-dom'

const NoAut = () => {
  return(
    <ul className="right">
      <li><NavLink to='/entrar'>Entrar</NavLink></li>
      <li><NavLink to='/registrar'>Registrar</NavLink></li>
    </ul>
  )
}

export default NoAut;