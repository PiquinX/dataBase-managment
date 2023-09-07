import { useState } from "react"

export function Modal ({ handleClick }) {
    const [cancelModal, setCancelModal] = useState(false)
    const [saveModal, setSaveModal] = useState(false)
  
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
  
    const handleCancelModal = () => setCancelModal(!cancelModal)
    const cancelModalStyles = cancelModal ? 'block' : 'hidden'
  
    const handleSaveModal = () => setSaveModal(!saveModal)
    const saveModalStyles = saveModal ? 'block' : 'hidden'
  
  
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
            <button onClick={handleCancelModal} className="px-3 py-1 text-lg bg-red-500 rounded-lg" >Cancelar</button>
            <div className={`${cancelModalStyles} absolute grid place-items-center w-[100%] h-[100%] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]`}>
              <CancelModal handleCancelModal={handleCancelModal} handleClose={handleClick} />
            </div>
            <button onClick={handleSaveModal} className="px-3 py-1 text-lg bg-green-400 rounded-lg" >Guardar</button>
            <div className={`${saveModalStyles} absolute grid place-items-center w-[100%] h-[100%] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]`}>
              <SaveModal handleSaveModal={handleSaveModal} handleClose={handleClick} />
            </div>
        </bottom>
      </div>
    )
  }
  
  function SaveModal({ handleSaveModal, handleClose }){
    const hnadleCloseAll = () => {
      handleSaveModal()
      handleClose()
    }
  
    return(
      <div>
        <div>
          <h3>Estas seguro de los cambios?</h3>
          <div className="flex justify-around px-6">
            <button onClick={handleSaveModal} className="px-3 py-1 text-lg bg-red-500 rounded-lg" >Cancelar</button>
            <button onClick={hnadleCloseAll} className="px-3 py-1 text-lg bg-green-400 rounded-lg">Confirmar</button>
          </div>
        </div>
      </div>
    )
  }
  
  function CancelModal({ handleCancelModal, handleClose }){
    const handleCloseAll = () => {
      handleCancelModal()
      handleClose()
    }
  
    return(
      <div>
        <div>
          <h3>Estas seguro de cancelar los cambios?</h3>
          <div className="flex justify-around px-6">
            <button onClick={handleCloseAll} className="px-3 py-1 text-lg bg-red-500 rounded-lg" >Si, salir</button>
            <button onClick={handleCancelModal} className="px-3 py-1 text-lg bg-green-400 rounded-lg">Cancelar</button>
          </div>
        </div>
      </div>
    )
  }