import React from 'react'

const Notif = (props) => {
  const { notificaciones } = props;
  return (
    <div className="section">
      <div className="card z-depth-10">
        <div className="card-content">
          <span className="card-title">Notificaciones</span>
          <ul>
            {notificaciones && notificaciones.map(item => {
              return (
                <li key={item.id}>
                  <span className="red-text">{item.usuario}</span>
                  <span>-{item.contenido}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notif