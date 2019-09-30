import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { salir } from '../../store/actions/autActions'


const Aut = (props) => {
  return(
    <ul className="right">
      <li><NavLink to='/crearreserva'>Nueva Reserva</NavLink></li>
      <li><a onClick={props.salir}>Salir</a></li>
      <li><NavLink to='/' className='btn btn-floating green lighten-1'>{props.profile.nombre}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    salir: () => dispatch(salir())
  }
}

export default connect(null, mapDispatchToProps)(Aut);