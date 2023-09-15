import { useState } from 'react'
import './App.css'
import { Users } from './components/Users'
import { useUsers } from './hooks/useUsers'
import { filterUsers } from './services/filterUsers'

function App () {
  // Estado que contiene la busqueda
  const [search, setSearch] = useState('')

  // Hook que devuelve la funcion que hace la busqueda de peliculas(fetch), si esta en cargando, si es antes de hacer la primera busqueda y las peliculas.
  const { users } = useUsers()

  const filteredUsers = filterUsers({ users, search })

  const handleChange = (event) => {
    const newSearch = event.target.value

    // si se ingresa un espacio si un caracter antes no carga el valor al input.
    if (newSearch === ' ') return

    // Actualiza el valor del input (la busqueda) y llama a la busqueda de peliculas controlada.
    setSearch(newSearch)
  }

  // reinicia la busqueda
  const restartSearch = () => setSearch('')

  const inputClass = search.length > 0 ? 'w-44 pl-10 pr-7' : 'w-6 pl-6'
  const xmarkClass = search.length > 0 ? 'block' : 'hidden'

  return (
    <div className='h-full text-white'>
      <header className='sticky top-0 flex justify-center w-full py-5 bg-[#202a37] z-50'>
        <div className='flex gap-2 w-[236px] justify-end relative '>
          <div className='relative group'>
            <input id='search' onChange={handleChange} tabIndex={1} value={search} placeholder='Peliculas y series' className={`${inputClass} outline-0 px-3 py-1 duration-100 bg-transparent border-2 border-white rounded focus:w-44 focus:border-[#4381e6] focus:pl-10`} />
            <label htmlFor='search'>
              <i className='absolute top-0 left-0 px-[.61rem] py-1 text-xl px- fa-solid fa-magnifying-glass cursor-pointer' htmlFor='search' />
            </label>
            <label htmlFor='search'>
              <i onClick={restartSearch} className={`${xmarkClass} absolute top-0 right-0 px-[.53rem] py-1 text-xl px- fa-solid fa-xmark cursor-pointer`} htmlFor='search' />
            </label>
          </div>
        </div>
      </header>

      <main className='flex bg-[#545c6c] justify-center w-full min-h-4/5 h-max py-10 px-10'>
        <Users users={filteredUsers} />
      </main>
    </div>
  )
}

export default App
