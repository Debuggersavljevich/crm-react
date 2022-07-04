import React from 'react'
import { Formik, Form, Field } from 'formik'


const Formulario = () => {


  const handleSumbit = (values) => {
    console.log(values)
  }

  return (
    <div className='bg-teal-700 mt-10 px-5 py-10 rounded-md shadow-2xl md:w-3/4 mx-auto'>
        <h1 className='text-white font-bold texl-xl text-center uppercase text-3xl'>Agregar Cliente</h1>
        
        <Formik initialValues={{
          nombre: '',
          empresa: '',
          email: '',
          tel: '',
          obs: ''

        }}
          onSubmit={ (values) => {
            handleSumbit(values)
          } }
        
        >

        {()=>( 
          
          <Form className='mt-10'>
            <div className='mb-4'>
              <label className="text-gray-100" htmlFor='nombre'>Nombre del Cliente</label>

              <Field 
                id="nombre"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Nombre del cliente..."
                name="nombre"
              />
            </div>

            <div className='mb-4'>
              <label className="text-gray-100" htmlFor='empresa'>Nombre de la empresa</label>

              <Field 
                id="empresa"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Nombre de la empresa..."
                name="empresa"
              />
            </div>

            <div className='mb-4'>
              <label className="text-gray-100" htmlFor='email'>Email del cliente</label>

              <Field 
                id="email"
                type="email"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Email..."
                name="email"
              />
            </div>

            <div className='mb-4'>
              <label className="text-gray-100" htmlFor='telefono'>Telefono del cliente</label>

              <Field 
                id="telefono"
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Teléfono del cliente..."
                name="tel"
              />
            </div>

            
            <div className='mb-4'>
              <label className="text-gray-100" htmlFor='notas'>Observaciones...</label>

              <Field 
                as="textarea"
                id="notas"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 h-20"
                placeholder="Observaciones del cliente..."
                name="obs"
              />
            </div>

            <input type="submit" value="Agregar Cliente" className='mt-5 w-full bg-gray-600 p-3 text-white uppercase font-bold text-lg' />
            
          </Form>
        )}
        </Formik>
    
    
    
    </div>

  )
}

export default Formulario