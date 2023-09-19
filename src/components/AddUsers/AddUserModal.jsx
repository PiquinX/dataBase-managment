import { useState } from 'react'
import { SaveModal } from './AddModal'
import { CancelModal } from './CancelModal'
import { useAddUser } from '../../hooks/useAddUser'
import { DataUserSection, DataAdressSection, DataDonationsSection, DataFinancialSection, DataObservationsSection } from './UserInfo'

export function AddUserModal ({ handleClick }) {
  const { newUser, changeInfo, changeInfoUsuario, isInfoChanged, addInfo } = useAddUser()
  // This contains which data have to be displayed.
  const [whichData, setWhichData] = useState(0)

  // This styles the header option depending on which data is displayed.
  const option1Style = whichData === 0 ? 'bg-[#375786] h-full border-transparent' : ''
  const option2Style = whichData === 1 ? 'bg-[#375786] h-full border-transparent' : ''
  const option3Style = whichData === 2 ? 'bg-[#375786] h-full border-transparent' : ''
  const option4Style = whichData === 3 ? 'bg-[#375786] h-full border-transparent' : ''
  const option5Style = whichData === 4 ? 'bg-[#375786] h-full border-transparent' : ''

  return (
    <div className='bg-[#375786] rounded-lg flex flex-col w-max md:w-1/2 h-4/5 relative overflow-hidden'>
      <header className='bg-[#2f4a72] h-[8%] flex'>
        <div className='flex items-center h-full'>
          <div onClick={() => setWhichData(0)} className={`${option1Style} border-r cursor-pointer text-sm lg:text-base px-2 lg:px-3 flex items-center`}>General</div>
          <div onClick={() => setWhichData(1)} className={`${option2Style} border-r cursor-pointer text-sm lg:text-base px-2 lg:px-3 flex items-center`}>Direcciones</div>
          <div onClick={() => setWhichData(2)} className={`${option3Style} border-r cursor-pointer text-sm lg:text-base px-2 lg:px-3 flex items-center`}>Donaciones</div>
          <div onClick={() => setWhichData(3)} className={`${option4Style} border-r cursor-pointer text-sm lg:text-base px-2 lg:px-3 flex items-center`}>Financiero</div>
          <div onClick={() => setWhichData(4)} className={`${option5Style} border-r cursor-pointer text-sm lg:text-base px-2 lg:px-3 flex items-center`}>Observaciones</div>
        </div>
        <div className='flex items-center justify-end flex-grow px-5'><i onClick={handleClick} className='text-lg font-bold cursor-pointer hover:text-red-500 fa-solid fa-x' /></div>
      </header>
      {
        // I left this because I want to save it in the local storage in order to edit it later.
          true &&
            <main className='grid place-items-center min-h-max h-[80%] overflow-auto pt-3 pb-6 bar'>
              <DataUserSection isDisplayed={whichData === 0}  updateInfo={changeInfoUsuario} data={newUser.usuario} />
              {/* <div className={`${data1Style} text-8xl overflow-auto h-full px-6`}>
              1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
            </div> */}
              <DataAdressSection isDisplayed={whichData === 1} updateInfo={changeInfo} data={newUser.direcciones} addInfo={addInfo} />
              {/* <div className={`${data2Style} text-8xl overflow-auto h-full px-6`}>
              2:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
            </div> */}
              <DataDonationsSection isDisplayed={whichData === 2} updateInfo={changeInfo} data={newUser.donaciones} addInfo={addInfo} />
              {/* <div className={`${data3Style} text-8xl overflow-auto h-full px-6`}>
              3:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
            </div> */}
              <DataFinancialSection isDisplayed={whichData === 3} updateInfo={changeInfo} data={newUser.financieros} addInfo={addInfo} />
              {/* <div className={`${data4Style} text-8xl overflow-auto h-full px-6`}>
              4:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
            </div> */}
              <DataObservationsSection isDisplayed={whichData === 4} updateInfo={changeInfo} data={newUser.observaciones} addInfo={addInfo} />
              {/* <div className={`${data5Style} text-8xl overflow-auto h-full px-6`}>
              5:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
            </div> */}
            </main>
        }
      <footer className='flex justify-around items-center max-h-[20%] flex-grow border-t-2 border-[#2f4a72]'>
        <CancelModal handleClose={handleClick} />
        <SaveModal handleClose={handleClick} isInfoChanged={isInfoChanged} />
      </footer>
    </div>
  )
}
