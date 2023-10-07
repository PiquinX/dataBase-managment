import { useState } from 'react'

export function ResetModal ({ isInfoChanged, handleClear }) {
  // the state of the modal.
  const [modal, setModal] = useState(false)

  // To open and close the modal.
  const handleModal = () => setModal(!modal)

  const handleConfirm = () => {
    handleClear()
    handleModal()
  }

  return (
    <>
      <button
        disabled={!isInfoChanged}
        onClick={handleModal}
        className='flex items-center gap-1 px-2 py-1 font-bold duration-75 border-2 rounded cursor-pointer hover:bg-red-500'
      >
        Reset <i className='fa-solid fa-trash' />
      </button>
      {
        modal &&
          <div className='fixed grid place-items-center w-[100%] h-[100%] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]'>
            <div className='w-1/5 bg-[#375786] rounded flex flex-col items-center gap-5 py-5'>
              <h3 className='text-xl'>Estas seguro de borrar todos los cambios?</h3>
              <div className='flex justify-around w-full'>
                <button onClick={handleModal} className='px-3 py-1 text-lg bg-red-500 rounded-lg'>Cancelar</button>
                <button onClick={handleConfirm} className='px-3 py-1 text-lg bg-green-400 rounded-lg'>Confirmar</button>
              </div>
            </div>
          </div>
      }
    </>
  )
}
