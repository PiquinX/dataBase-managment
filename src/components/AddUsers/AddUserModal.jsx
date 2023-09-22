import { useState } from 'react'
import { SaveModal } from './AddModal'
import { CancelModal } from './CancelModal'
import { useAddUser } from '../../hooks/useAddUser'
import { DataUserSection, DataAdressSection, DataDonationsSection, DataFinancialSection, DataObservationsSection } from './UserInfo'

export function AddUserModal ({ handleClick }) {
  const { newUser, changeInfo, changeInfoUsuario, isInfoChanged, addInfo, clearNewUser, addUser } = useAddUser()
  
  // This contains which data have to be displayed.
  const [whichData, setWhichData] = useState(0)

  // This finction restarts the value of the newUser state.
  const handleClear = () => {
    clearNewUser()
  }

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
            <button className='absolute z-40 flex items-center gap-1 px-2 py-1 font-bold duration-75 border-2 rounded left-5 top-20 hover:bg-red-500' onClick={handleClear}>
              Reset <i className="fa-solid fa-trash"></i>
            </button>
            <main className='grid place-items-center relative min-h-max h-[80%] overflow-y-scroll pt-3 pb-6 bar'>
              <DataUserSection isDisplayed={whichData === 0}  updateInfo={changeInfoUsuario} data={newUser.usuario} />
              <DataAdressSection isDisplayed={whichData === 1} updateInfo={changeInfo} data={newUser.direcciones} addInfo={addInfo} />
              <DataDonationsSection isDisplayed={whichData === 2} updateInfo={changeInfo} data={newUser.donaciones} addInfo={addInfo} />
              <DataFinancialSection isDisplayed={whichData === 3} updateInfo={changeInfo} data={newUser.financieros} addInfo={addInfo} />
              <DataObservationsSection isDisplayed={whichData === 4} updateInfo={changeInfo} data={newUser.observaciones} addInfo={addInfo} />
            </main>
      <footer className='flex justify-around items-center max-h-[20%] flex-grow border-t-2 border-[#2f4a72]'>
        <CancelModal handleClose={handleClick} />
        <SaveModal handleClose={handleClick} isInfoChanged={isInfoChanged} addUser={addUser} />
      </footer>
    </div>
  )
}
