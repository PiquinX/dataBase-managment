import { useState } from 'react'
import './App.css'
import { Title } from './components/Title'
import { brandName, addMeessage } from './constants'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='register-container'>
      <Title brandName={brandName} addMeessage={addMeessage} />
    </div>
  )
}

export default App
