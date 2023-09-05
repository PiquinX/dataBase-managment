import { useRef, useState } from "react";

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
  const originalInfo = useRef()

  

  return { infoUser, originalInfo, setInfoUser }
}

function Modal ({ handleClick }) {
  const { infoUser, originalInfo, setInfoUser } = useInfoUser()

  // This contains which data have to be displayed.
  const [whichData, setWhichData] = useState(0)

  // This decide which part of the code will be displayed.
  const data1Style = whichData === 0 ? 'block' : 'hidden'
  const data2Style = whichData === 1 ? 'block' : 'hidden'
  const data3Style = whichData === 2 ? 'block' : 'hidden'
  const data4Style = whichData === 3 ? 'block' : 'hidden'

  // This styles the header option depending on which data is displayed.
  const option1Style = whichData === 0 ? 'bg-[#375786] h-full border-transparent' : ''
  const option2Style = whichData === 1 ? 'bg-[#375786] h-full border-transparent' : ''
  const option3Style = whichData === 2 ? 'bg-[#375786] h-full border-transparent' : ''
  const option4Style = whichData === 3 ? 'bg-[#375786] h-full border-transparent' : ''


  return (
    <div className="bg-[#375786] rounded-lg w-1/2 h-4/5 relative overflow-auto">
      <header className="bg-[#2f4a72] h-[8%]">
        <div onClick={handleClick} className="absolute cursor-pointer right-6 top-4 hover:text-red-500"><i className="text-lg font-bold fa-solid fa-x"></i></div>
        <div className="flex items-center h-full">
          <div onClick={()=> setWhichData(0)} className={`${option1Style} border-r cursor-pointer px-7 flex items-center`}>Datos 1</div>
          <div onClick={()=> setWhichData(1)} className={`${option2Style} border-r cursor-pointer px-7 flex items-center`}>Datos 2</div>
          <div onClick={()=> setWhichData(2)} className={`${option3Style} border-r cursor-pointer px-7 flex items-center`}>Datos 3</div>
          <div onClick={()=> setWhichData(3)} className={`${option4Style} border-r cursor-pointer px-7 flex items-center`}>Datos 4</div>
        </div>
      </header>
      <main className='grid place-items-center h-[80%] px-6'>
        <div className={`${data1Style}`} >
          1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
        </div>
        <div className={`${data2Style}`} >
          2:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
        </div>
        <div className={`${data3Style}`} >
          3:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
        </div>
        <div className={`${data4Style}`} >
          4:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
        </div>
      </main>
      <bottom className="flex justify-around px-6">
          <button className="px-3 py-1 text-lg bg-red-500 rounded-lg">Cancelar</button>
          <button className="px-3 py-1 text-lg bg-green-400 rounded-lg">Guardar</button>
      </bottom>
    </div>
  )
}