import { useState } from 'react'
import { Modal } from './Modals/Modal'

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
        <div className={`absolute grid place-items-center w-[100vw] h-[100vh] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]`}>
          <Modal handleClick={handleClick} ID={id} />
        </div>
      }
    </>
  )
}

function Campo ({ children, styles }) {
  return (
    <p className={`${styles} bg-[#172335] cursor-default w-full px-2 py-1 border h-9 overflow-hidden duration-75 hover:min-w-max hover:z-30 hover:bg-[#3f577c]`}>{children}</p>
  )
}
