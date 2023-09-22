import { User } from './User'
import { Campo } from './Campo'

export function Users ({ users }) {
  
  return (
    <>
      {
        users
          ? (
            <ul className='grid w-full max-w-max max-h-[80%] h-max overflow-auto'>
              <li className='grid gap-0 grid-cols-responsive duration-75 bg-[#172335]'>
                <Campo styles='col-start-2'>ID</Campo>
                <Campo>Estado</Campo>
                <Campo>Tipo</Campo>
                <Campo>N° Documento</Campo>
                <Campo>F. de nacimiento</Campo>
                <Campo>Apellido</Campo>
                <Campo>Nombre</Campo>
                <Campo>Correo</Campo>
                <Campo>CUIL</Campo>
                <Campo>Telefono movil</Campo>
                <Campo>Telefono fijo</Campo>
                <Campo>Referente</Campo>
                <Campo>Ocupacion</Campo>
                <Campo>F. de Alta</Campo>
                <Campo>Firma</Campo>
              </li>
              {
                users?.map(user => (
                  <User
                    key={user.id}
                    {...user}
                  />
                ))
              }
            </ul>
            )
          : <h3 className='text-xl font-bold'>No se encontro ningun usuario</h3>
            }
    </>
  )
}
