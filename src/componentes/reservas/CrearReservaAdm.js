import React, { Component } from 'react'
import { connect } from 'react-redux'
import { crearReservaAdm } from '../../store/actions/reservaActions'
import {Redirect} from 'react-router-dom'

class CrearReservaAdm extends Component {
  state = {
    nombre: '',
    email: '',
    telefono: '',
    comensales: '',
    fecha: '',
    hora: '',
    idCliente: '',
    obs: ''
  }

  componentDidMount () {
    this.refs.nombre.focus();

  }
  

  GestionaCambio = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  
  GestionaEnvio = (e) => {
    e.preventDefault();
    //console.log(this.state);
    //console.log('GestionaEnvio')
    this.props.crearReservaAdm(this.state);
    this.props.history.push('/');

  }
  
  render() {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to='/entrar' />
    return (
      <div className="container">
        <form onSubmit={this.GestionaEnvio} className="white">
          <h5 className="grey-text text-darken-3">Crear Reserva Administrador</h5>
          <div className="input-field">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" ref="nombre" id="nombre" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" id="telefono" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="comensales">Comensales</label>
            <input type="text" id="comensales" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="fecha">Fecha</label>
            <input type="date" id="fecha" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="hora">Hora</label>
            <input type="time" id="hora" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="idCliente">ID Cliente</label>
            <input type="text" id="idCliente" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="obs">Observaciones</label>
            <input type="text" id="obs" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 depth-10">Confirmar</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    crearReservaAdm: (reserva) => dispatch(crearReservaAdm(reserva))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrearReservaAdm)
