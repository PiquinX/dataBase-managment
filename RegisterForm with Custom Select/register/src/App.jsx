import { useState } from 'react'
import './styles/Form.css'
import './styles/Inputs.css'
import { Title } from './components/Title'
import { brandName, addMeessage } from './constants'
import { Form } from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='register-container'>
      <Title brandName={brandName} addMeessage={addMeessage} />
      <Form />
    </div>
  )
}

export default App
