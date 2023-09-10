import { useState } from 'react'
import { SaveModal } from './SaveModal'
import { CancelModal } from './CancelModal'
import { useUserInfo } from '../../hooks/useUserInfo'
import { DataUserSection, DataAdressSection, DataDonationsSection, DataFinancialSection, DataObservationsSection } from './UserInfo'

export function Modal ({ handleClick, ID }) {
  const { userInfo, changeInfo, isInfoChanged, resetInfo } = useUserInfo(ID)
  // This contains which data have to be displayed.
  const [whichData, setWhichData] = useState(0)

  // This decide which part of the code will be displayed.
  const data1Style = whichData === 0 ? 'block' : 'hidden'
  const data2Style = whichData === 1 ? 'block' : 'hidden'
  const data3Style = whichData === 2 ? 'block' : 'hidden'
  const data4Style = whichData === 3 ? 'block' : 'hidden'
  const data5Style = whichData === 4 ? 'block' : 'hidden'

  // This styles the header option depending on which data is displayed.
  const option1Style = whichData === 0 ? 'bg-[#375786] h-full border-transparent' : ''
  const option2Style = whichData === 1 ? 'bg-[#375786] h-full border-transparent' : ''
  const option3Style = whichData === 2 ? 'bg-[#375786] h-full border-transparent' : ''
  const option4Style = whichData === 3 ? 'bg-[#375786] h-full border-transparent' : ''
  const option5Style = whichData === 4 ? 'bg-[#375786] h-full border-transparent' : ''

  return (
    <div className='bg-[#375786] rounded-lg w-1/2 h-4/5 relative overflow-auto'>
      <header className='bg-[#2f4a72] h-[8%]'>
        <div onClick={handleClick} className='absolute cursor-pointer right-6 top-4 hover:text-red-500'><i className='text-lg font-bold fa-solid fa-x' /></div>
        <div className='flex items-center h-full'>
          <div onClick={() => setWhichData(0)} className={`${option1Style} border-r cursor-pointer px-3 flex items-center`}>General</div>
          <div onClick={() => setWhichData(1)} className={`${option2Style} border-r cursor-pointer px-3 flex items-center`}>Direcciones</div>
          <div onClick={() => setWhichData(2)} className={`${option3Style} border-r cursor-pointer px-3 flex items-center`}>Donaciones</div>
          <div onClick={() => setWhichData(3)} className={`${option4Style} border-r cursor-pointer px-3 flex items-center`}>Financiero</div>
          <div onClick={() => setWhichData(4)} className={`${option5Style} border-r cursor-pointer px-3 flex items-center`}>Observaciones</div>
        </div>
      </header>
      {
          userInfo &&
            <main className='grid place-items-center h-[80%] overflow-hiiden'>
              <DataUserSection isDisplayed={whichData === 0} data={userInfo.usuario} />
              {/* <div className={`${data1Style} text-8xl overflow-auto h-full px-6`}>
              1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
            </div> */}
              <DataAdressSection isDisplayed={whichData === 1} data={userInfo.direcciones} />
              {/* <div className={`${data2Style} text-8xl overflow-auto h-full px-6`}>
              2:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
            </div> */}
              <DataDonationsSection isDisplayed={whichData === 2} data={userInfo.donaciones} />
              {/* <div className={`${data3Style} text-8xl overflow-auto h-full px-6`}>
              3:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
            </div> */}
              <DataFinancialSection isDisplayed={whichData === 3} data={userInfo.financieros} />
              {/* <div className={`${data4Style} text-8xl overflow-auto h-full px-6`}>
              4:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
            </div> */}
              <DataObservationsSection isDisplayed={whichData === 4} data={userInfo.observaciones} />
              {/* <div className={`${data5Style} text-8xl overflow-auto h-full px-6`}>
              5:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, hic beatae. Ex reiciendis eveniet ut eum nisi, perspiciatis quas. Nobis quo laboriosam, veritatis amet possimus expedita fugit molestias non alias.
            </div> */}
            </main>
        }
      <footer className='flex justify-around px-6 py-6'>
        <CancelModal handleClose={handleClick} />
        <SaveModal handleClose={handleClick} />
      </footer>
    </div>
  )
}
