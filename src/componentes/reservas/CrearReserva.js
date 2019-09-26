import React, { Component } from 'react'
import {connect} from 'react-redux'
import {crearReserva} from '../../store/actions/reservaActions'

class CrearReserva extends Component {
  state = {
    comensales: '',
    fecha: '',
    hora: '',
    obs: ''
  }
  
  GestionaCambio = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  
  GestionaEnvio = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.crearReserva(this.state);
  }
  
  render() {
    return (
      <div className="container">
        <form onSubmit={this.GestionaEnvio} className="white">
          <h5 className="grey-text text-darken-3">Crear Reserva</h5>
          <div className="input-field">
            <label htmlFor="comensales">Comensales</label>
            <input type="text" id="comensales" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="fecha">Fecha</label>
            <input type="datetime" id="fecha" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="hora">Hora</label>
            <input type="datetime" id="hora" onChange={this.GestionaCambio}/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    crearReserva: (reserva) => dispatch(crearReserva(reserva))
  }
}

export default connect(null, mapDispatchToProps)(CrearReserva)
