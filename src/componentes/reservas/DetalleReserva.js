import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


function DetalleReserva(props) {
  const id = props.match.params.id;
  const { reserva } = props;
  //console.log(props);
  if (reserva) {
    return(
      <div className="container section detalle-reserva">
        <div className="card z-depth-10">
          <div className="card-content">
            <span className="card-title">Reserva {reserva.nombre} - {id}</span>
            <p>Texto libre reserva para cliente</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>Cliente</div>
            <div>Fecha</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Cargando Reserva...</p>
      </div>
  )
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  
  const id = ownProps.match.params.id;
  const reservas = state.firestore.data.reservas;
  const reserva = reservas ? reservas[id] : null
  return {
    reserva: reserva
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'reservas'}
  ])
)(DetalleReserva)
