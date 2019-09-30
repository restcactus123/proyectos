import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editarReserva } from '../../store/actions/reservaActions'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class EditarReserva extends Component {

  
  constructor(props){
    super(props);
    this.state={
      id: '',
      comensales: '',
      fecha: '',
      hora: '',
      obs: '',
      estado: ''
    }
  } 

  
  componentDidMount() {

    let reserva = this.props.reservas.filter(item => { return item.id === this.props.match.params.id });
    this.setState({
      id: reserva[0].id,
      comensales: reserva[0].comensales,
      fecha: reserva[0].fecha,
      hora: reserva[0].hora,
      obs: reserva[0].obs,
      estado: reserva[0].estado
    });
    this.refs.comensales.value = reserva[0].comensales;
    this.refs.fecha.value = reserva[0].fecha;
    this.refs.hora.value = reserva[0].hora;
    this.refs.obs.value = reserva[0].obs;
    this.refs.estado.value = reserva[0].estado;
    this.refs.comensales.focus();
    
  }
 
  GestionaCambio = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  
  GestionaEnvio = (e) => {
    e.preventDefault();
//    this.setState({ id: this.props.match.params.id });
    let reserva = this.props.reservas.filter(item => { return item.id === this.props.match.params.id });    

    console.log(reserva[0].id);
    console.log(this.state);
    console.log(this.props);
    
    this.props.editarReserva(this.state);
    this.props.history.push('/')
  }
  
  render() {
    const { reservas, auth } = this.props;

    if (!auth.uid) return <Redirect to='/entrar' />

    return (
      <div className="container">
        <form onSubmit={this.GestionaEnvio} className="white">
          <h5 className="grey-text text-darken-3">Editar Reserva</h5>
          <div className="input-field">
            <label htmlFor="comensales">Comensales</label>
            <input onFocus={this.GestionaFocus} type="text" id="comensales" ref="comensales" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="fecha">Fecha</label>
            <input type="datetime" id="fecha" ref="fecha" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="hora">Hora</label>
            <input type="datetime" id="hora" ref="hora" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="obs">Observaciones</label>
            <input type="text" id="obs" ref="obs" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="obs">Estado</label>
            <input type="text" id="estado" ref="estado" onChange={this.GestionaCambio}/>
          </div>
         <div className="input-field">
            <button className="btn green lighten-1 depth-10">Salvar Cambios</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
//    reservas: state.res.reservas
    reservas: state.firestore.ordered.reservas,
    auth: state.firebase.auth
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    editarReserva: (reserva) => dispatch(editarReserva(reserva))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'reservas' }
//    { collection: 'reservas', where: ['id', '==', this.props.match.params.id] }
//    { collection: 'reservas', where: ['idCliente', '==', 'nGefJAsNxPN77CZrvwLvCbMQhNw2'] }
])
)(EditarReserva)




