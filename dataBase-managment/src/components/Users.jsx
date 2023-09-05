import { User } from "./User"

export function Users ({ users }) {
  return (
    <>
      {
        users
          ? (
            <ul className='grid max-w-80% overflow-y-hidden'>
              <li className='grid gap-0 grid-cols-responsive duration-75 bg-[#172335]'>
                <Campo styles='col-start-2'>ID</Campo>
                <Campo >Estado</Campo>
                <Campo >Tipo</Campo>
                <Campo >N° Documento</Campo>
                <Campo >F. de nacimiento</Campo>
                <Campo >Apellido</Campo>
                <Campo >Nombre</Campo>
                <Campo >Correo</Campo>
                <Campo >CUIL</Campo>
                <Campo >Telefono movil</Campo>
                <Campo >Telefono fijo</Campo>
                <Campo >Referente</Campo>
                <Campo >Ocupacion</Campo>
                <Campo >F. de Alta</Campo>
                <Campo >Firma</Campo>
              </li>
              {
                users?.map(user => (
                  <User 
                    key={user.id}
                    {...user}/>
                  // <li className='grid grid-cols-responsive duration-75 bg-[#172335]' key={user.id}>
                  //   <div className="grid p-1 border place-items-center"><i className="grid w-full h-full rounded-lg cursor-pointer place-items-center hover:text-green-400 fa-regular fa-pen-to-square"></i></div>
                  //   <Campo styles='col-start-2'>5u28572</Campo>
                  //   <Campo >Activo</Campo>
                  //   <Campo >Socio</Campo>
                  //   <Campo >46491945</Campo>
                  //   <Campo >15/03/1990</Campo>
                  //   <Campo >Albertini</Campo>
                  //   <Campo >Ricardo</Campo>
                  //   <Campo >santiagopiquinvillegas@sagradocorazon.edu.ar</Campo>
                  //   <Campo >20-46491945-7</Campo>
                  //   <Campo >11 4244 5252</Campo>
                  //   <Campo >+ 4156 5436</Campo>
                  //   <Campo >REFERENTE</Campo>
                  //   <Campo >Psicologo</Campo>
                  //   <Campo >20/10/21</Campo>
                  //   <Campo >FIRMA</Campo>
                  // </li>
                ))
              }
            </ul>
            )
          : <h3 className='text-xl font-bold'>No se encontro ninguna pelicula</h3>
            }
    </>
  )
}

function Campo ({ children, styles}) {
  return (
    <p className={`${styles} bg-[#172335] cursor-default w-full px-2 py-1 border max-h-9 overflow-hidden duration-75 hover:min-w-max hover:relative hover:z-30`}>{children}</p>
  )
}
