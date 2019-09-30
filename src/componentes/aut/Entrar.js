import React, { Component } from 'react'
import { connect } from 'react-redux'
import {entrar} from '../../store/actions/autActions'
import {Redirect} from 'react-router-dom'

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
    this.props.entrar(this.state);
  }
  
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />
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
            <div className="red-text center">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.aut.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    entrar: (creds) => dispatch(entrar(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entrar)
