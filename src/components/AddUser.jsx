import { AddUserModal } from './AddUsers/AddUserModal'
import { useState } from 'react'

export function AddUsers (){
    const [modal, setModal] = useState(false)

  const handleClick = () => {
    setModal(!modal)
  }
    
    return(
        <>
            <button onClick={handleClick}>
                <i className="p-2 bg-green-400 rounded fa-solid fa-plus"></i>
            </button>
            {
                // remember to implement this code to the rest of the modals
                modal &&
                <div className='fixed grid place-items-center w-[100vw] overflow-hidden h-[100vh] z-[1000] top-0 left-0 backdrop-blur bg-[#0000004f]'>
                    <AddUserModal handleClick={handleClick} />
                </div>
            }
        </>
    )
}