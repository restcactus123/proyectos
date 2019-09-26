import React, { Component } from 'react'

class EditarReservaAdm extends Component {
  state = {
    nombre: '',
    email: '',
    telefono: '',
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
          <h5 className="grey-text text-darken-3">Editar Reserva Administrador</h5>
          <div className="input-field">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" onChange={this.GestionaCambio}/>
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
            <input type="datetime" id="fecha" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="hora">Hora</label>
            <input type="datetime" id="hora" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="obs">Observaciones</label>
            <input type="text" className="materialize-textarea" id="obs" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 depth-10">Confirmar</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditarReservaAdm
