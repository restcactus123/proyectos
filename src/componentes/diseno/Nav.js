import React from 'react'
import { Link } from 'react-router-dom'
import Aut from './Aut'
import NoAut from './NoAut'
import Adm from './Adm'

const Nav = () => {
  return(
    <nav className="nav-wraper green darken-3">
      
      <div className="container">
        <Link to='/' className="brand-logo">Reservas Restaurante Cactus</Link>
        <Aut />
        <NoAut />
        <Adm />
      </div>
    </nav>
    
  )
}

export default Nav;