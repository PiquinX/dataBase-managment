import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [clickable, setClickable] = useState(true)
  const [contador, setContador] = useState(0)

  const [tiempo, setTiempo] = useState(0)
  const [corriendo, setCorriendo] = useState(false)

  useEffect(() => {
    let intervalId

    if (corriendo) {
      intervalId = setInterval(() => {
        setTiempo(tiempo + 0.01)
      }, 10)
    }
    if (tiempo > 10) detenerCronometro()

    return () => {
      clearInterval(intervalId)
    }
  })

  const iniciarCronometro = () => {
    setCorriendo(true)
  }

  const detenerCronometro = () => {
    setCorriendo(false)
    setTiempo(0)
    setClickable(false)
  }

  const clickCounter = () => {
    if (corriendo !== true) iniciarCronometro()

    setContador(contador + 1)
  }

  const resetStates = () => {
    setClickable(true)
    setContador(0)
    setCorriendo(false)
    setTiempo(0)
  }

  return (
    <div className='contenedor'>
      <section className='clickear-section'>
        <h1>CLICKS PER SECOND</h1>
        <div className='clickear' onClick={clickable ? clickCounter : undefined} />
      </section>
      <section className='mostrar-resultados'>
        <h3 className='contadores'>CPS : {tiempo === 0 ? contador > 0 ? contador / 10 : '0.00' : Math.round((contador / tiempo) * 10) / 10}</h3>

        <h3 className='contadores'>Time : {tiempo === 0 ? '0.00' : Math.round(tiempo * 100) / 100} s</h3>

        <h3 className='contadores'>Clicks : {contador}</h3>
      </section>
      <section>
        <button className='button-reset' onClick={resetStates}>RESET</button>
      </section>
    </div>
  )
}

export default App
