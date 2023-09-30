import { useState } from 'react'
import { EditUserModal } from './EditUsers/EditUserModal'
import { Campo } from './Campo'
import { FaltaSubirloModal } from './FaltaSubirloModal'

export function User ({ id, estado, tipo, dni, nacimiento, apellido, nombre, mail, cuil, movil, fijo, referente, ocupcacion, fechaDeAlta, firma, faltaSubirlo }) {
  const [modal, setModal] = useState(false)

  const userClass = faltaSubirlo ? "bg-[#551919] hover:bg-[#7e3434]" : 'bg-[#172335] hover:bg-[#1c2b41]'

  const handleClick = () => {
    setModal(!modal)
  }

  return (
    <>
      <div className={`${userClass} flex`} >
        <FaltaSubirloModal faltaSubirlo={faltaSubirlo} />
        <div onClick={handleClick} className='grid duration-75 cursor-pointer grid-cols-responsive'>    
          <Campo>{id}</Campo>
          <Campo>{estado}</Campo>
          <Campo>{tipo}</Campo>
          <Campo>{dni}</Campo>
          <Campo>{nacimiento}</Campo>
          <Campo>{apellido}</Campo>
          <Campo>{nombre}</Campo>
          <Campo>{mail}</Campo>
          <Campo>{cuil}</Campo>
          <Campo>{movil}</Campo>
          <Campo>{fijo}</Campo>
          <Campo>{referente}</Campo>
          <Campo>{ocupcacion}</Campo>
          <Campo>{fechaDeAlta}</Campo>
          <Campo>{firma}</Campo>
        </div>    
      </div>
      {
        // remember to implement this code to the rest of the modals
        modal &&
          <div className='fixed grid place-items-center w-[100vw] overflow-hidden h-[100vh] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]'>
            <EditUserModal handleClick={handleClick} ID={id} />
          </div>
      }
    </>
  )
}
