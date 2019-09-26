import React from 'react'
import { NavLink } from 'react-router-dom'

const Aut = () => {
  return(
    <ul className="right">
      <li><NavLink to='/crearreserva'>Nueva Reserva</NavLink></li>
      <li><NavLink to='/'>Salir</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating green lighten-1'>RC</NavLink></li>
    </ul>
  )
}

export default Aut;