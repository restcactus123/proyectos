import autReducer from './autReducer'
import resReducer from './resReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const princReducer = combineReducers({
  aut: autReducer,
  res: resReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default princReducer
