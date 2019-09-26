import React from 'react'

const ResumenReserva = ({reserva}) => {
  return (
    <div className="card z-depth-10 resumen-reserva">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{reserva.nombre}</span>
        <p>{reserva.email}</p>
        <p className="grey-text">{reserva.comensales}</p>
      </div>
    </div>
  )
}

export default ResumenReserva