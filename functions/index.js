const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.reservasCactus = functions.https.onRequest((request, response) => {
  response.send("Reservas Restaurante Cactus");
 });

const crearNotificacion = (notificacion => {
  return admin.firestore().collection('notificaciones').add(notificacion)
    .then(doc => console.log('Reserva creada', doc));
}) 
 
exports.reservaCreada = functions.firestore.document('reservas/{reservaId}').onCreate(doc => {
  const reserva = doc.data();
  const notificacion = {
    contenido: 'Reserva creada',
    usuario: `${ reserva.nombre } ${ reserva.telefono }`,
    hora: admin.firestore.FieldValue.serverTimestamp()
  
  }
  return crearNotificacion(notificacion)
})
 
exports.usuarioEntro = functions.auth.user()
  .onCreate(usuario => {
    return admin.firestore().collection('usuarios').doc(usuario.uid).get()
      .then(doc => {
        const nuevoUsuario = doc.data();
        const notificacion = {
          contenido: 'Nuevo usuario',
          usuario: `${nuevoUsuario.nombre} ${nuevoUsuario.telefono}`,
          time: admin.firestore.FieldValue.serverTimestamp()
          
        }
      return crearNotificacion(notificacion)

    })
})
