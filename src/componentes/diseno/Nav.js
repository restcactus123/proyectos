import React from 'react'
import { Link } from 'react-router-dom'
import Aut from './Aut'
import NoAut from './NoAut'
import Adm from './Adm'
import {connect} from 'react-redux'
import logocactus from './logocactus.png'


const Nav = (props) => {
  const { auth, profile } = props;
  //console.log(auth);
  
  let enlaces = auth.email === 'admin@restaurantecactus.com' ? <Adm profile={profile} /> : <Aut profile={profile} />
  if (!auth.uid) {
    enlaces = <NoAut />
  }
  
  
  console.log('enlaces' + enlaces);

  return (
    <nav className="nav-wraper green darken-3">
      
      <div className="container">
        <Link to='/' className="left brand-logo">Reservas</Link>
        { enlaces }
        <img src={logocactus} alt="logo" align="right" width="50" height="50"/>
      </div>
    </nav>
    
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Nav);