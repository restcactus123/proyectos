const initState = {
  reservas: [
    {id: '1', nombre: 'n1', email: 'n1@n1.com', telefono: '654321098', comensales: '1', fecha: '11/11/2019', hora: '22:01', obs: 'obs1'},
    {id: '2', nombre: 'n2', email: 'n2@n1.com', telefono: '654321098', comensales: '2', fecha: '12/11/2019', hora: '22:02', obs: 'obs2'},
    {id: '3', nombre: 'n3', email: 'n3@n1.com', telefono: '654321098', comensales: '3', fecha: '13/11/2019', hora: '22:03', obs: 'obs3'},
  ]
}

const resReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREAR_RESERVA':
      console.log('reserva creada', action.reserva);
      return state;
    case 'CREAR_RESERVA_ERROR':
      console.log('error creando reserva', action.err);
      return state;
    case 'CREAR_RESERVA_ADM':
      console.log('reserva creada adm', action.reserva);
      return state;
    case 'CREAR_RESERVA_ADM_ERROR':
      console.log('error creando reserva adm', action.err);
      return state;
    case 'EDITAR_RESERVA':
      console.log('reserva editada', action.reserva);
      return state;
    case 'EDITAR_RESERVA_ERROR':
      console.log('error editando reserva', action.err);
      return state;
    case 'EDITAR_RESERVA_ADM':
      console.log('reserva editada adm', action.reserva);
      return state;
    case 'EDITAR_RESERVA_ADM_ERROR':
      console.log('error editando adm', action.err);
      return state;
    default:
      return state;
  }
  
}

export default resReducer