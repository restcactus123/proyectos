export const crearReserva = (reserva) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // llamada asincrona al db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const clienteId = getState().firebase.auth.uid;
    const email = getState().firebase.auth.email;
    firestore.collection('reservas').add({
      ...reserva,
      nombre: profile.nombre,
      idCliente: clienteId,
      telefono: profile.telefono,
      email: email,
      cuando: new Date(),
      estado: 'PENDIENTE'
    }).then(() => {
      dispatch({ type: 'CREAR_RESERVA', reserva: reserva });
    }).catch((err) => {
      dispatch({ type: 'CREAR_RESERVA_ERROR', err });
    })
    
    
  }
};

export const crearReservaAdm = (reserva) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // llamada asincrona al db
    //console.log('Add');
    const firestore = getFirestore();
    
    firestore.collection('reservas').add({
      ...reserva,
      cuando: new Date(),
      estado: 'CONFIRMADA'
    }).then(() => {
      dispatch({ type: 'CREAR_RESERVA_ADM', reserva: reserva });
    }).catch((err) => {
      dispatch({ type: 'CREAR_RESERVA_ADM_ERROR', err });
    })
    
    
  }
};

export const editarReserva = (reserva) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // llamada asincrona al db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const clienteId = getState().firebase.auth.uid;
    console.log('editarReserva', reserva);
    firestore.collection('reservas').doc(reserva.id).update({
      ...reserva,
      nombre: profile.nombre,
      idCliente: clienteId,
      telefono: profile.telefono,
      cuando: new Date(),
   }).then(() => {
      dispatch({ type: 'EDITAR_RESERVA', reserva: reserva });
    }).catch((err) => {
      dispatch({ type: 'EDITAR_RESERVA_ERROR', err });
    })
    
    
  }
};

export const editarReservaAdm = (reserva) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // llamada asincrona al db
    //console.log('Add');
    const firestore = getFirestore();
    console.log('editarReservaAdm', reserva);
    
    firestore.collection('reservas').doc(reserva.id).update({
      ...reserva,
      cuando: new Date(),
    }).then(() => {
      dispatch({ type: 'EDITAR_RESERVA_ADM', reserva: reserva });
    }).catch((err) => {
      dispatch({ type: 'EDITAR_RESERVA_ADM_ERROR', err });
    })
    
    
  }
};