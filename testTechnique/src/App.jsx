import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCocktail } from './hooks/useCocktail'


function App () {
  // Este hook se encarga de hacer el fetch para obtener el fact. Tiene el valor del fact y una funcion para actualizarlo.
  const { fact, refreshFact } = useCatFact()

  // Este hook se encarga de hacer el fetch para obtener el cocktail (el cocktail se actualiza cuando el fact cambia).
  const { cocktail } = useCocktail({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main className='flex flex-col items-center justify-center w-full gap-10 mt-10'>
      <h1>Aplicacion loca</h1>
      <button onClick={handleClick}>Refresh</button>
      { fact && <p data-testid='data-fact' >{fact}</p> }
      { cocktail && <p data-testid='data-cocktail' >{cocktail}</p> }
    </main>
  )
}

export default App
