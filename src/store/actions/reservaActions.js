export const crearReserva = (reserva) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // llamada asincrona al db
    const firestore = getFirestore();
    
    firestore.collection('reservas').add({
      ...reserva,
      nombre: 'nombre hard',
      email: 'nombrehard@n.com',
      idCliente: 'xpto',
      telefono: '493949393',
      cuando: new Date()
    }).then(() => {
      dispatch({ type: 'CREAR_RESERVA', reserva: reserva });
    }).catch((err) => {
      dispatch({ type: 'CREAR_RESERVA_ERROR', err });
    })
    
    
  }
};