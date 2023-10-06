import { User } from './User'
import { Campo } from './Campo'

export function Users ({ users }) {
  return (
    <div className='grid w-full max-w-max max-h-[45%] superShort:max-h-[60%] short:max-h-[80%] h-max overflow-auto'>
      <div className='flex bg-[#172335] z-[20] sticky top-0'>
        <Campo styles='w-[8em]'>Falta subirlo</Campo>
        <div className='grid gap-0 duration-75 grid-cols-responsive '>
          <Campo>ID</Campo>
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
        </div>
      </div>
      {
        users?.map(user => (
          <User
            key={user.id}
            {...user}
          />
        ))
      }
    </div>
  )
}
