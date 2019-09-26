import React, { Component } from 'react'
import Notif from './Notif'
import ListaReservas from '../reservas/ListaReservas'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class Panel extends Component {
  render() {
    console.log(this.props);
    const { reservas } = this.props;
    return (
      <div className="panel container">
        <div className="row">
          <div className="col s12 m6">
            <ListaReservas reservas={reservas}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notif />
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
    reservas: state.firestore.ordered.reservas
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'reservas' }
  ])
)(Panel)


//export default connect(mapStateToProps)(Panel)