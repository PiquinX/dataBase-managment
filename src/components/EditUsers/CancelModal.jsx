import { useState } from 'react'

export function CancelModal ({ handleClose, isInfoChanged }) {
  // The state of the modal.
  const [modal, setModal] = useState(false)

  // To open and close the modal.
  const handleModal = () => setModal(!modal)

  // This close all the modals.
  const handleCloseAll = () => {
    handleModal()
    handleClose()
  }

  return (
    <>
      {
        !isInfoChanged
        ? <button onClick={handleClose} className="px-3 py-1 text-lg bg-red-500 rounded-lg" >Cancelar</button>
        : (
          <>
            <button onClick={handleModal} className="px-3 py-1 text-lg bg-red-500 rounded-lg" >Cancelar</button>
            {
              modal &&
              <div className='fixed grid place-items-center w-[100%] h-[100%] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]' >
                <div className='w-max bg-[#375786] rounded flex flex-col items-center gap-5 p-5'>
                    <h3 className='text-xl'>Estas seguro de cancelar los cambios?</h3>
                    <div className="flex justify-around w-full">
                      <button onClick={handleCloseAll} className="px-3 py-1 text-lg bg-red-500 rounded-lg" >Si, salir</button>
                      <button onClick={handleModal} className="px-3 py-1 text-lg bg-green-400 rounded-lg">Cancelar</button>
                    </div>
                </div>
              </div>
            }
          </>
        )
      }
    </>
  )
}
