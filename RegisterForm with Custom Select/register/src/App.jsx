import './styles/Form.css'
import './styles/Inputs.css'
import './styles/select.css'
import { Title } from './components/Title'
import { brandName, addMeessage } from './constants'
import { Form } from './components/Form'

function App() {

  return (
    <div className='register-container'>
      <Title brandName={brandName} addMeessage={addMeessage} />
      <Form />
    </div>
  )
}

export default App
