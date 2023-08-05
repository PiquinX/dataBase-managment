import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [clickable, setClickable] = useState(true)
  const [contador, setContador] = useState(0)

  const [tiempo, setTiempo] = useState(0)
  const [corriendo, setCorriendo] = useState(false)

  useEffect(() => {
    let intervalId

    // si esta corriendo agrega tiempo, sino lo no elimina el intervalo.
    if (corriendo) {
      intervalId = setInterval(() => {
        setTiempo(tiempo + 0.01)
      }, 10)
    }else if (!corriendo){ 
      clearInterval(intervalId)
    }

    // si el tiempo supera los 10 segundo termina.
    if (tiempo > 10) detenerCronometro()

    // cuando se desmonta el componente se limpia el intervalo para evitar que se sobrepongan los intervalos.
    return () => {
      clearInterval(intervalId)
    }
  }, [tiempo, corriendo])

  // inicia el cronometro.
  const iniciarCronometro = () => {
    setCorriendo(true)
  }

  // resetea los estados que se encargan de la metrica cronometro.
  const detenerCronometro = () => {
    setCorriendo(false)
    setTiempo(0)
    setClickable(false)
  }

  // actualiza el contador.Si el cronometro no esta activo lo activa.
  const clickCounter = () => {
    if (corriendo !== true) iniciarCronometro()

    setContador(contador + 1)
  }

  // resetea todos los estados, como si recargaras la pagina.
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
