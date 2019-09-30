import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {salir} from '../../store/actions/autActions'

const Adm = (props) => {
  return(
    <ul className="right">
      <li><NavLink to='/crearreservaadm'>Nueva Reserva</NavLink></li>
      <li><a onClick={props.salir}>Salir</a></li>
      <li><NavLink to='/' className='btn btn-floating red lighten-1'>{props.profile.nombre}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    salir: () => dispatch(salir())
  }
}

export default connect(null, mapDispatchToProps)(Adm);