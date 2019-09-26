import autReducer from './autReducer'
import resReducer from './resReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const princReducer = combineReducers({
  aut: autReducer,
  res: resReducer,
  firestore: firestoreReducer
});

export default princReducer
