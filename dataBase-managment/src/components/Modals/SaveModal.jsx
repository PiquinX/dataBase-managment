import { useState } from 'react'

export function SaveModal ({ handleClose }) {
  const [modal, setModal] = useState(false)

  const handleModal = () => setModal(!modal)

  const saveModalStyles = modal ? 'block' : 'hidden'

  const handleCloseAll = () => {
    handleModal()
    handleClose()
  }

  return (
    <>
      {
        // Remember to add a difrent color to the botton when it's disabled.
        // <button disabled={!isInfoChanged} onClick={handleModal} className="px-3 py-1 text-lg bg-green-400 rounded-lg" >Guardar</button>
        // <div className={`${saveModalStyles} absolute grid place-items-center w-[100%] h-[100%] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]`}>
        //   <div>
        //     <div>
        //       <h3>Estas seguro de los cambios?</h3>
        //       <div className="flex justify-around px-6">
        //         <button onClick={handleModal} className="px-3 py-1 text-lg bg-red-500 rounded-lg" >Cancelar</button>
        //         <button onClick={handleCloseAll} className="px-3 py-1 text-lg bg-green-400 rounded-lg">Confirmar</button>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      }
      <button onClick={handleModal} className='px-3 py-1 text-lg bg-green-400 rounded-lg'>Guardar</button>
      <div className={`${saveModalStyles} absolute grid place-items-center w-[100%] h-[100%] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]`}>
        <div>
          <div>
            <h3>Estas seguro de los cambios?</h3>
            <div className='flex justify-around px-6'>
              <button onClick={handleModal} className='px-3 py-1 text-lg bg-red-500 rounded-lg'>Cancelar</button>
              <button onClick={handleCloseAll} className='px-3 py-1 text-lg bg-green-400 rounded-lg'>Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
