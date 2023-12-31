import { useState } from 'react'

export function FaltaSubirloModal ({ faltaSubirlo, changeFaltaSubirlo }) {
  // the state of the modal.
  const [modal, setModal] = useState(false)

  // To open and close the modal.
  const handleModal = () => {
    setModal(!modal)
  }

  const handleFaltaSubirlo = () => {
    changeFaltaSubirlo()
    handleModal()
  }

  return (
    <>
      <button disabled={!faltaSubirlo} onClick={handleModal} className='grid w-[8em] p-1 border place-items-center hover:bg-[#3f577c] group'>
        <i className='grid w-full h-full rounded-lg place-items-center group-hover:text-green-400 fa-regular fa-pen-to-square' />
      </button>
      {
        modal &&
          <div className='fixed grid place-items-center w-[100%] h-[100%] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]'>
            <div className='w-max bg-[#375786] rounded flex flex-col items-center gap-5 p-5'>
              <h3 className='text-xl'>Estas seguro de que ya subiste los cambios?</h3>
              <div className='flex justify-around w-full'>
                <button onClick={handleModal} className='px-3 py-1 text-lg bg-red-500 rounded-lg'>No, Cancelar</button>
                <button onClick={handleFaltaSubirlo} className='px-3 py-1 text-lg bg-green-400 rounded-lg'>Si, estoy seguro</button>
              </div>
            </div>
          </div>
      }
    </>
  )
}
