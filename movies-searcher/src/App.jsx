import { useState, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { Select } from './components/select'
import debounce from 'just-debounce-it'

function App () {
  const [search, setSearch] = useState('')
  const [selectValue, setSelectValue] = useState('Default')
  const { movies, getMovies, isBeforeSearch, isSearching } = useMovies({ selectValue })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 350)
    , [])

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch === ' ') return

    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const restartSearch = () => {
    setSearch('')
  }

  const inputClass = search.length > 0 ? 'w-44 pl-10 pr-7' : 'w-6 pl-6'
  const xmarkClass = search.length > 0 ? 'block' : 'hidden'

  return (
    <div className='h-full text-white'>
      <header className='sticky top-0 flex justify-center w-full py-5 bg-[#202a37] z-50'>
        <div className='flex gap-2 w-[236px] justify-end relative '>
          <div className='relative group'>
            <input id='search' onChange={handleChange} value={search} placeholder='Peliculas y series' className={`${inputClass} outline-0 px-3 py-1 duration-100 bg-transparent border-2 border-white rounded focus:w-44 focus:border-[#4381e6] focus:pl-10`} />
            <label htmlFor='search'>
              <i className='absolute top-0 left-0 px-[.61rem] py-1 text-xl px- fa-solid fa-magnifying-glass cursor-pointer' htmlFor='search' />
            </label>
            <label htmlFor='search'>
              <i onClick={restartSearch} className={`${xmarkClass} absolute top-0 right-0 px-[.53rem] py-1 text-xl px- fa-solid fa-xmark cursor-pointer`} htmlFor='search' />
            </label>
          </div>
          <Select options={['Default', 'From "A" to "Z"', 'From "Z" to "A"']} value={selectValue} changeValue={setSelectValue} />
        </div>
      </header>

      <main className='flex bg-[#545c6c] justify-center w-full min-h-4/5 h-max py-10 px-[13%]'>
        {
          isSearching
          
            ? <div className='grid h-full place-items-center'><i className="fa-solid fa-arrow-rotate-right text-8xl animate-spin"></i></div>
            : <Movies movies={movies} isBeforeSearch={isBeforeSearch} />
        }
      </main>
    </div>
  )
}

export default App
