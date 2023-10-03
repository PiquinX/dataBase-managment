import { User } from './User'
import { Campo } from './Campo'
import { useRef, useState } from 'react';
import { useDraggable } from "react-use-draggable-scroll"

export function Users ({ users }) {
  const draggableRef = useRef()
  const { events } = useDraggable(draggableRef)
  
  return (
    <div
      className={`grid w-full max-w-max max-h-[50%] sm:max-h-[80%] h-max overflow-auto`}
      {...events}
      ref={draggableRef}
      >
      <div className='flex bg-[#172335] z-[20] sticky top-0' >
        <Campo styles={'w-[7em]'}>Falta subirlo</Campo>
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
