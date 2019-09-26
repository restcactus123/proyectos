import React from 'react'
import { NavLink } from 'react-router-dom'

const Adm = () => {
  return(
    <ul className="right">
      <li><NavLink to='/crearreservaadm'>Nueva Reserva</NavLink></li>
      <li><NavLink to='/'>Salir</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating green lighten-1'>RC</NavLink></li>
    </ul>
  )
}

export default Adm;