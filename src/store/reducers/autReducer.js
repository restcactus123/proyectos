const initState = {
  authError : null
}

const autReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ENTRAR_NOK':
      console.log('error al entrar');
      return { ...state, authError: 'Error al entrar!' }
    case 'ENTRAR_OK':
      console.log('entrar ok');
      return { ...state, authError: null }
    case 'SALIR_OK':
      console.log('salir ok')
      return state;
    case 'REGISTRAR_OK':
      console.log('registrar ok');
      return { ...state, authError: null }
    case 'REGISTRAR_NOK':
      console.log('error al registrar')
      return { ...state, authError: action.err.message }
    default:
      return state;
      
  }
}

export default autReducer