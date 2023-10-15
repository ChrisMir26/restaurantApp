import React from 'react'

const Message = ({msg}) => {

    const style = {
        color: msg.error ? 'red' : 'white',
        padding:"0.5rem"
        // Puedes agregar más propiedades de estilo aquí
    };

   

  return (
    <>
    <p style={style}>{msg.message}</p>
    </>
  )
}

export default Message