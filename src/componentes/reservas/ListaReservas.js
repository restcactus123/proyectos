import React from 'react'
import ResumenReserva from './ResumenReserva'
import {Link} from 'react-router-dom'

const ListaReservas = ({reservas}) => {
  return (
    <div className="lista-reservas section">

      {reservas && reservas.map(reserva => {
        return (
          <Link to={'/reserva/' + reserva.id}>
            <ResumenReserva reserva={reserva} key={reserva.id} />
          </Link>
        )
      })}
      
    </div>
  )
}

export default ListaReservas