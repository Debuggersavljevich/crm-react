import React from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
    <>
        <h1 className='font-black text-4xl text-teal-700'>Nuevo cliente</h1>
        <p className='mt-3'>Llená la información del cliente</p>
        <Formulario></Formulario>
    </>
  )
}

export default NuevoCliente