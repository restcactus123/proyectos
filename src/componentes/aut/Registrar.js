import React, { Component } from 'react'

class Registrar extends Component {
  state = {
    email: '',
    contrasena: '',
    nombre: '',
    telefono: ''
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
          <h5 className="grey-text text-darken-3">Entrar</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="contrasena">Contraseña</label>
            <input type="password" id="contrasena" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" id="telefono" onChange={this.GestionaCambio}/>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 depth-10">Registrar</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Registrar
