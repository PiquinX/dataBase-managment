import { useState } from 'react'
import { EditUserModal } from './EditUsers/EditUserModal'
import { Campo } from './Campo'

export function User ({ id, estado, tipo, dni, nacimiento, apellido, nombre, mail, cuil, movil, fijo, referente, ocupcacion, fechaDeAlta, firma }) {
  const [modal, setModal] = useState(false)

  const handleClick = () => {
    setModal(!modal)
  }

  return (
    <>
      <li className='grid duration-75 grid-cols-responsive'>
        <div onClick={handleClick} className='bg-[#172335] grid p-1 cursor-pointer border place-items-center hover:bg-[#3f577c] group'><i className='grid w-full h-full rounded-lg place-items-center group-hover:text-green-400 fa-regular fa-pen-to-square' /></div>
        <Campo styles='col-start-2'>{id}</Campo>
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
      </li>
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
