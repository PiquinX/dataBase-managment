import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const [search, setSearch] = useState("")
  const {movies, getMovies, isBeforeSearch, isSearching} = useMovies()

  const handleSubmit = (event)=> {
    event.preventDefault()

    getMovies({ search })
  }

  const handleChange = (event)=> {
    const newSearch = event.target.value
    if (newSearch === ' ') return

    setSearch(newSearch)
  }
  
  return (
    <div>
      <header className='sticky flex justify-center w-full py-5 bg-blue-900'>
        <h1 className='absolute text-2xl left-2'>PIQUIN MOVIES</h1>
        <form onSubmit={handleSubmit} className='flex gap-2'>
          <input onChange={handleChange} value={search} placeholder='Spiederman, Avengers, Superman...' className='px-3 py-2 bg-transparent border border-black rounded' />
          <button className='p-3 py-2 border border-black rounded'>Buscar</button>
        </form>
      </header>

      <main className='w-full'>
        {
          isSearching 
          ? <p>buscando...</p>
          : <Movies movies={movies} isBeforeSearch={isBeforeSearch} />
        }
      </main>
    </div>
  )
}

export default App
