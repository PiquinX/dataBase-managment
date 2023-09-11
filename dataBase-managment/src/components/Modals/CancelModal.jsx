import { useState } from 'react'

export function CancelModal ({ handleClose, isInfoChanged }) {
  const [modal, setModal] = useState(false)

  const handleModal = () => setModal(!modal)
  const cancelModalStyles = modal ? 'block' : 'hidden'

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
            <div className={`${cancelModalStyles} absolute grid place-items-center w-[100%] h-[100%] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]`}>
              <div>
                <div>
                  <h3>Estas seguro de cancelar los cambios?</h3>
                  <div className="flex justify-around px-6">
                    <button onClick={handleCloseAll} className="px-3 py-1 text-lg bg-red-500 rounded-lg" >Si, salir</button>
                    <button onClick={handleModal} className="px-3 py-1 text-lg bg-green-400 rounded-lg">Cancelar</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </>
  )
}
