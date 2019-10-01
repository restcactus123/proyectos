import React, { Component } from 'react'
import Notif from './Notif'
import ListaReservas from '../reservas/ListaReservas'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'


class Panel extends Component {


  componentWillMount(){

  }
  
  render() {
    console.log(this.props);
    const { reservas, auth, notificaciones } = this.props;
    let enlaces = auth.email === 'admin@restaurantecactus.com' ? (<Notif notificaciones={notificaciones}/>) : null
    console.log(reservas);

    let misReservas; // filtar despues
    
    if (!auth.uid) return <Redirect to='/entrar' />

    return (
      <div className="panel container">
        <div className="row">
          <div className="col s12 m6">
            <ListaReservas uid={auth.uid} reservas={reservas}/>
          </div>
          <div className="col s12 m5 offset-m1">
            {enlaces}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
//    reservas: state.res.reservas
    reservas: state.firestore.ordered.reservas,
    auth: state.firebase.auth,
    notificaciones: state.firestore.ordered.notificaciones
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'reservas', orderBy: ['cuando'] },
    {collection: 'notificaciones', limit: 10, orderBy: ['hora']}
//    { collection: 'reservas', where: ['idCliente', '==', 'nGefJAsNxPN77CZrvwLvCbMQhNw2'] }
  ])
)(Panel)


//export default connect(mapStateToProps)(Panel)