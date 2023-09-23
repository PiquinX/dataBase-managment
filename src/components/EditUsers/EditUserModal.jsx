import { useState } from 'react'
import { SaveModal } from './SaveModal'
import { CancelModal } from './CancelModal'
import { useUserInfo } from '../../hooks/useUserInfo'
import { DataUserSection, DataAdressSection, DataDonationsSection, DataFinancialSection, DataObservationsSection } from './UserInfo'

export function EditUserModal ({ handleClick, ID }) {
  const { userInfo, changeInfo, isInfoChanged, changeInfoUsuario, saveInfo, addInfo, removeInfo } = useUserInfo(ID)
  
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
          userInfo &&
            <main className='grid place-items-center min-h-max h-[80%] overflow-y-scroll pt-3 pb-6 bar'>
              <DataUserSection isDisplayed={whichData === 0} data={userInfo.usuario} updateInfo={changeInfoUsuario} addInfo={addInfo} />
              <DataAdressSection isDisplayed={whichData === 1} data={userInfo.direcciones} updateInfo={changeInfo} addInfo={addInfo} removeInfo={removeInfo} />
              <DataDonationsSection isDisplayed={whichData === 2} data={userInfo.donaciones} updateInfo={changeInfo} addInfo={addInfo} removeInfo={removeInfo} />
              <DataFinancialSection isDisplayed={whichData === 3} data={userInfo.financieros} updateInfo={changeInfo} addInfo={addInfo} removeInfo={removeInfo} />
              <DataObservationsSection isDisplayed={whichData === 4} data={userInfo.observaciones} updateInfo={changeInfo} addInfo={addInfo} removeInfo={removeInfo} />
            </main>
        }
      <footer className='flex justify-around items-center max-h-[20%] flex-grow border-t-2 border-[#2f4a72]'>
        <CancelModal handleClose={handleClick} isInfoChanged={isInfoChanged} />
        <SaveModal handleClose={handleClick} isInfoChanged={isInfoChanged} saveInfo={saveInfo} />
      </footer>
    </div>
  )
}
