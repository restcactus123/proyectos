import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDIPy1roQqrzPwa1kYqope2SnkVsC_DCTc",
  authDomain: "restcactus-4e8b9.firebaseapp.com",
  databaseURL: "https://restcactus-4e8b9.firebaseio.com",
  projectId: "restcactus-4e8b9",
  storageBucket: "restcactus-4e8b9.appspot.com",
  messagingSenderId: "979135861599",
  appId: "1:979135861599:web:362c6ae09053c8a922dcea",
  measurementId: "G-ETNGJ38NNX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

firebase.firestore()

export default firebase;