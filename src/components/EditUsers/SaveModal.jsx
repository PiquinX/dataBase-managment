import { useState } from 'react'

export function SaveModal ({ handleClose, isInfoChanged, saveInfo }) {
  // the state of the modal.
  const [modal, setModal] = useState(false)

  // To open and close the modal.
  const handleModal = () => setModal(!modal)

  // This function close all the modals and also saves the changes.
  const handleSave = () => {
    saveInfo()
    handleModal()
    handleClose()
  }

  return (
    <>
        <button disabled={!isInfoChanged} onClick={handleModal} className="px-3 py-1 text-lg bg-green-400 rounded-lg disabled:opacity-30" >Guardar</button>
        {
          modal && 
          <div className='fixed grid place-items-center w-[100%] h-[100%] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]' >
            <div className='w-1/5 bg-[#375786] rounded flex flex-col items-center gap-5 py-5'>
                <h3 className='text-xl'>Estas seguro de los cambios?</h3>
                <div className="flex justify-around w-full">
                  <button onClick={handleModal} className="px-3 py-1 text-lg bg-red-500 rounded-lg" >Cancelar</button>
                  <button onClick={handleSave} className="px-3 py-1 text-lg bg-green-400 rounded-lg">Confirmar</button>
                </div>
            </div>
          </div>
        }
        
    </>
  )
}
