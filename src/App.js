import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './componentes/diseno/Nav'
import Panel from './componentes/panel/Panel'
import DetalleReserva from './componentes/reservas/DetalleReserva'
import Entrar from './componentes/aut/Entrar'
import Registrar from './componentes/aut/Registrar'
import CrearReserva from './componentes/reservas/CrearReserva'
import CrearReservaAdm from './componentes/reservas/CrearReservaAdm'
import EditarReserva from './componentes/reservas/EditarReserva'
import EditarReservaAdm from './componentes/reservas/EditarReservaAdm'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Panel} />
        <Route path='/reserva/:id' component={DetalleReserva} />
        <Route path='/entrar' component={Entrar} />
        <Route path='/registrar' component={Registrar} />
        <Route path='/crearreserva' component={CrearReserva} />
        <Route path='/crearreservaadm' component={CrearReservaAdm} />
        <Route path='/editarreserva/:id' component={EditarReserva} />
        <Route path='/editarreservaadm/:id' component={EditarReservaAdm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
