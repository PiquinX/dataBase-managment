import { useState } from 'react'

export function DeleteModal ({ deleteInfo }) {
  // the state of the modal.
  const [modal, setModal] = useState(false)

  // To open and close the modal.
  const handleModal = () => setModal(!modal)

  const handleDelete = () => {
    deleteInfo()
    handleModal()
  }

  return (
    <>
      <button onClick={handleModal} className='px-2 py-1 text-sm font-bold text-white border-2 border-red-500 rounded hover:bg-red-500'>Eliminar</button>
      {
          modal &&
            <div className='fixed grid place-items-center w-[100%] h-[100%] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]'>
              <div className='w-max bg-[#375786] rounded flex flex-col items-center gap-5 p-5'>
                <h3 className='text-xl'>Estas seguro de eliminar?</h3>
                <div className='flex justify-around w-full'>
                  <button onClick={handleModal} className='px-3 py-1 text-lg bg-green-400 rounded-lg'>Cancelar</button>
                  <button onClick={handleDelete} className='px-3 py-1 text-lg bg-red-500 rounded-lg'>Confirmar</button>
                </div>
              </div>
            </div>
        }

    </>
  )
}
