import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editarReservaAdm } from '../../store/actions/reservaActions'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class EditarReservaAdm extends Component {

  constructor(props){
    super(props);
    this.state={
      id: '',
      nombre: '',
      email: '',
      telefono: '',
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
      estado: reserva[0].estado,
      idCliente: reserva[0].idCliente,
      nombre: reserva[0].nombre,
      telefono: reserva[0].telefono
    });
    this.refs.comensales.value = reserva[0].comensales;
    this.refs.fecha.value = reserva[0].fecha;
    this.refs.hora.value = reserva[0].hora;
    this.refs.obs.value = reserva[0].obs;
    this.refs.nombre.value = reserva[0].nombre;
    this.refs.telefono.value = reserva[0].telefono;
    this.refs.idCliente.value = reserva[0].idCliente;
    this.refs.estado.value = reserva[0].estado;
    this.refs.nombre.focus();

    
  }
  
  GestionaCambio = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  
  GestionaEnvio = (e) => {
    e.preventDefault();
    console.log(this.state);
    let reserva = this.props.reservas.filter(item => { return item.id == this.props.match.params.id });    

    console.log(reserva[0].id);
    console.log(this.state);
    console.log(this.props);
    
    this.props.editarReservaAdm(this.state);
    this.props.history.push('/')
  }

  
  render() {
    const { reservas, auth } = this.props;
    
    if (!auth.uid) return <Redirect to='/entrar' />
    
    return (
      <div className="container">
        <form onSubmit={this.GestionaEnvio} className="white">
          <h5 className="grey-text text-darken-3">Editar Reserva Administrador</h5>
          <div className="input-field">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" ref="nombre" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" id="telefono" ref="telefono" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="comensales">Comensales</label>
            <input type="text" id="comensales" ref="comensales" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="fecha">Fecha</label>
            <input type="date" id="fecha" ref="fecha" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="hora">Hora</label>
            <input type="time" id="hora" ref="hora" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="idCliente">ID Cliente</label>
            <input type="text" id="idCliente" ref="idCliente" onChange={this.GestionaCambio}/>
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
    editarReservaAdm: (reserva) => dispatch(editarReservaAdm(reserva))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'reservas' }
//    { collection: 'reservas', where: ['id', '==', this.props.match.params.id] }
//    { collection: 'reservas', where: ['idCliente', '==', 'nGefJAsNxPN77CZrvwLvCbMQhNw2'] }
])
)(EditarReservaAdm)
