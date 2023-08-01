import { useState, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { Select } from './components/select'
import debounce from 'just-debounce-it'

function App() {
  const [search, setSearch] = useState('')
  const [selectValue, setSelectValue] = useState('Default')
  const {movies, getMovies, isBeforeSearch, isSearching} = useMovies({selectValue})

  const debouncedGetMovies = useCallback(
    debounce(search => {
    getMovies({ search })
  }, 350)
  , [])

  const handleChange = (event)=> {
    const newSearch = event.target.value
    if (newSearch === ' ') return

    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }
  
  return (
    <div>
      <header className='sticky top-0 flex justify-center w-full py-5 bg-blue-900'>
        <h1 className='absolute text-2xl left-2'>PIQUIN MOVIES</h1>
        <div className='flex gap-2'>
          <input onChange={handleChange} value={search} placeholder='Spiederman, Avengers, Superman...' className='px-3 py-2 bg-transparent border border-black rounded' />
          <Select options={['Default','Alfabeticamente (A - Z)', 'Alfabeticamente (Z - A)']} value={selectValue} changeValue={setSelectValue} />
        </div>
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
