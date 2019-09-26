import React, { Component } from 'react'

class Entrar extends Component {
  state = {
    email: '',
    contrasena: ''
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
            <button className="btn blue lighten-1 depth-10">Entrar</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Entrar
