import { useRef, useState } from "react";
import { Modal } from "./Modal";

export function User ({ id, estado, tipo, dni, nacimiento, apellido, nombre, mail, cuil, movil, fijo, referente, ocupcacion, fechaDeAlta, firma }) {
  const [modal, setModal] = useState(false)

  const modalStyles = modal ? 'block' : 'hidden'

  const handleClick = () => {
    setModal(!modal)
  }

  return (
    <>
      <li className='grid duration-75 grid-cols-responsive'>
        <div onClick={handleClick} className="bg-[#172335] grid p-1 cursor-pointer border place-items-center hover:bg-[#3f577c] group"><i className="grid w-full h-full rounded-lg place-items-center group-hover:text-green-400 fa-regular fa-pen-to-square"></i></div>
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
      <div className={`${modalStyles} absolute grid place-items-center w-[100vw] h-[100vh] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]`} >
        <Modal handleClick={handleClick} />
      </div>
    </>
  )
}

function Campo ({ children, styles }) {
  return (
    <p className={`${styles} bg-[#172335] cursor-default w-full px-2 py-1 border max-h-9 overflow-hidden duration-75 hover:min-w-max hover:relative hover:z-30 hover:bg-[#3f577c]`}>{children}</p>
  )
}

function useInfoUser(){
  const [infoUser, setInfoUser] = useState({})
  const originalInfo = useRef(infoUser)

  const isChanged = originalInfo.current !== infoUser

  

  return { infoUser, isChanged, setInfoUser }
}

