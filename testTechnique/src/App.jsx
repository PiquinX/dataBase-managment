import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCocktail } from './hooks/useCocktail'


function App () {
  const { fact, refreshFact } = useCatFact()
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
