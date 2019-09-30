import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'

  
function DetalleReserva(props) {

  
  const id = props.match.params.id;
  const { reserva, auth } = props;
  if (!auth.uid) return <Redirect to='/entrar' />
  
  if (auth.uid === 'xui9v6fvzjNUYI4jdf6BcytNIrp1') return <Redirect to={'/editarreservaadm/' + id} />
  else return <Redirect to={'/editarreserva/' + id} />

  //console.log(props);
  if (reserva) {
    return(
      <div className="container section detalle-reserva">
        <div className="card z-depth-10">
          <div className="card-content">
            <span className="card-title">Reserva {reserva.nombre} - {id}</span>
            <p>Observaciones: {reserva.obs}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>{reserva.email}</div>
            <div>{reserva.fecha}</div>
            <div>{reserva.hora}</div>
            <div>{reserva.estado}</div>
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
    reserva: reserva,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'reservas'}
  ])
)(DetalleReserva)
