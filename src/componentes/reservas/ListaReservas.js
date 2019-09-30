import React from 'react'
import ResumenReserva from './ResumenReserva'
import {Link} from 'react-router-dom'

const ListaReservas = ({ uid, reservas }) => {
  return (
    <div className="lista-reservas section">
      {reservas && reservas.map(reserva => {
        if (reserva.idCliente === uid || uid === 'xui9v6fvzjNUYI4jdf6BcytNIrp1') {
          return (
            <Link to={'/reserva/' + reserva.id} key={reserva.id} >
              <ResumenReserva reserva={reserva} />
            </Link>
          )
        }  
      })}
    </div>
  )
}

export default ListaReservas