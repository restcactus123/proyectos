import React from 'react'
import moment from 'moment'


const ResumenReserva = ({reserva}) => {
  return (
    <div className="card z-depth-10 resumen-reserva">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{reserva.nombre}</span>
        <p>Email: {reserva.email}</p>
        <p className="grey-text">Para el {reserva.fecha} a las {reserva.hora}</p>
        <p className="grey-text">Comensales: {reserva.comensales}</p>
        <p className="grey-text">{reserva.estado}</p>
        <p className="grey-text">Creada: {moment.locale('es')} {moment(reserva.cuando.toDate()).format('lll')}</p>
      </div>
    </div>
  )
}

export default ResumenReserva