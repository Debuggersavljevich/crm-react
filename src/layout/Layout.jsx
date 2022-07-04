import { Outlet, Link, useLocation } from "react-router-dom"


const Layout = () => {
  
  const location = useLocation()
  const urlActual = location.pathname
  
  
  return (
    <div>
        <div className="md:flex md:min-h-screen">
          <div className="md:w-1/4 bg-teal-700 px-5 py-10">
            <h2 className="text-4xl font-black text-center text-white underline decoration-sky-500 ">Client<span className="underline decoration-indigo-500">LY</span></h2>

            <nav className="mt-10">
              <Link to="/clientes" className={`${urlActual === "/clientes" ? ' text-white underline decoration-sky-500' : 'text-white'} text-2xl block mt-2 hover:text-sky-500 transition duration-150`}>Clientes</Link>
              <Link to="/clientes/nuevo" className={`${urlActual === "/clientes/nuevo" ? ' text-white underline decoration-sky-500' : 'text-white'} text-2xl block mt-2 hover:text-sky-500 transition duration-150`}>Nuevo Cliente</Link>
            </nav>
          
          </div>

          <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
            <Outlet />
          </div>

          
        </div>
    </div>
  )
}

export default Layout