export const entrar = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.contrasena
    ).then(() => {
      dispatch({type: 'ENTRAR_OK'})
    }).catch((err) => {
      dispatch({type: 'ENTRAR_NOK', err})
    })
  }
}

export const salir = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({type: 'SALIR_OK'})
    })
  }
}

export const registrar = (nuevoUsuario) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    
    firebase.auth().createUserWithEmailAndPassword(
      nuevoUsuario.email,
      nuevoUsuario.contrasena
    ).then((resp) => {
      return firestore.collection('usuarios').doc(resp.user.uid).set({
        nombre: nuevoUsuario.nombre,
        telefono: nuevoUsuario.telefono
        
      })
    }).then(() => {
      dispatch({type: 'REGISTRAR_OK'})
    }).catch(err => {
      dispatch({ type: 'REGISTRAR_NOK' , err})
    })
  }
}