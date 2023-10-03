import { User } from './User'
import { Campo } from './Campo'
import { useRef, useState } from 'react';
import { useDraggable } from "react-use-draggable-scroll"

export function Users ({ users }) {
  const draggableRef = useRef()
  const { events } = useDraggable(draggableRef)

  const [sortBy, setSortBy] = useState()
  
  return (
    <div
      className={`grid w-full max-w-max max-h-[50%] sm:max-h-[80%] h-max overflow-auto`}
      {...events}
      ref={draggableRef}
      >
      <div className='flex bg-[#172335] z-[20] sticky top-0' >
        <Campo handleClick={()=> setSortBy('')} styles={'w-[7em]'}>Falta subirlo</Campo>
        <div className='grid gap-0 duration-75 grid-cols-responsive '>
          <Campo handleClick={()=> setSortBy('')}>ID</Campo>
          <Campo handleClick={()=> setSortBy('')}>Estado</Campo>
          <Campo handleClick={()=> setSortBy('')}>Tipo</Campo>
          <Campo handleClick={()=> setSortBy('')}>N° Documento</Campo>
          <Campo handleClick={()=> setSortBy('')}>F. de nacimiento</Campo>
          <Campo handleClick={()=> setSortBy('')}>Apellido</Campo>
          <Campo handleClick={()=> setSortBy('')}>Nombre</Campo>
          <Campo handleClick={()=> setSortBy('')}>Correo</Campo>
          <Campo handleClick={()=> setSortBy('')}>CUIL</Campo>
          <Campo handleClick={()=> setSortBy('')}>Telefono movil</Campo>
          <Campo handleClick={()=> setSortBy('')}>Telefono fijo</Campo>
          <Campo handleClick={()=> setSortBy('')}>Referente</Campo>
          <Campo handleClick={()=> setSortBy('')}>Ocupacion</Campo>
          <Campo handleClick={()=> setSortBy('')}>F. de Alta</Campo>
          <Campo handleClick={()=> setSortBy('')}>Firma</Campo>
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
