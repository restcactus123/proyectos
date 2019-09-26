import React, { Component } from 'react'

class EditarReserva extends Component {
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
    console.log(this.state);
  }
  
  render() {
    return (
      <div className="container">
        <form onSubmit={this.GestionaEnvio} className="white">
          <h5 className="grey-text text-darken-3">Editar Reserva</h5>
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

export default EditarReserva
