import React, { Component } from 'react'
import {connect} from 'react-redux'
import {crearReserva} from '../../store/actions/reservaActions'
import {Redirect} from 'react-router-dom'

class CrearReserva extends Component {
  state = {
    comensales: '',
    fecha: '',
    hora: '',
    obs: ''
  }
  
  componentDidMount () {
    this.refs.comensales.focus();

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
    this.props.history.push('/');
  }
  
  render() {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to='/entrar' />
    return (
      <div className="container">
        <form onSubmit={this.GestionaEnvio} className="white">
          <h5 className="grey-text text-darken-3">Crear Reserva</h5>
          <div className="input-field">
            <label htmlFor="comensales">Comensales</label>
            <input type="text" ref="comensales" id="comensales" onChange={this.GestionaCambio}/>
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
    crearReserva: (reserva) => dispatch(crearReserva(reserva))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrearReserva)
