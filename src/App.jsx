import { useState } from 'react'
import './App.css'
import { Users } from './components/Users'
import { useUsers } from './hooks/useUsers'
import { filterUsers } from './services/filterUsers'
import { AddUsers } from './components/AddUser'
import { useSort } from './hooks/useSort'
import { Select } from './components/Select'
import { sortOptions } from './constants/sortOptions'

function App () {
  // This state contains the search.
  const [search, setSearch] = useState('')

  // This custom hooks contains the sort State, the function to change it, and a function to sort the users.
  const { setSort, sortUsers, sort } = useSort()

  // This custom Hook returns an array with all the users (fetch).
  const { users } = useUsers()

  // This function filters the user with the search as a parameter.
  const filteredUsers = filterUsers({ users, search })

  // This function returns the users sorted by a parameter determined by the Select.
  const sortedUsers = sortUsers(filteredUsers)

  const handleChange = (event) => {
    const newSearch = event.target.value

    // If the user writes a blank space before writing anything else, it won't be updated.
    if (newSearch === ' ') return

    setSearch(newSearch)
  }

  // Function, which restarts the search.
  const restartSearch = () => setSearch('')

  const inputClass = search.length > 0 ? 'w-44 pl-10 pr-7' : 'w-6 pl-6'
  const xmarkClass = search.length > 0 ? 'block' : 'hidden'

  return (
    <div className='h-screen text-white'>
      <header className='sticky top-0 flex justify-center w-full py-3 md:py-5 bg-[#202a37] z-50'>
        <div className='flex gap-2 w-[236px] justify-end relative '>
          <div className='relative group'>
            <input id='search' onChange={handleChange} tabIndex={1} value={search} placeholder='Buscar' className={`${inputClass} outline-0 px-3 py-1 duration-100 bg-transparent border-2 border-white rounded focus:w-44 focus:border-[#4381e6] focus:pl-10`} />
            <label htmlFor='search'>
              <i className='absolute top-0 left-0 px-[.61rem] py-1 text-xl px- fa-solid fa-magnifying-glass cursor-pointer' htmlFor='search' />
            </label>
            <label htmlFor='search'>
              <i onClick={restartSearch} className={`${xmarkClass} absolute top-0 right-0 px-[.53rem] py-1 text-xl px- fa-solid fa-xmark cursor-pointer`} htmlFor='search' />
            </label>
          </div>
        </div>
      </header>

      <main className='flex flex-col bg-[#545c6c] text-xs sm:text-sm md:text-base items-center w-full h-full gap-1 py-1 md:gap-4 md:py-4 px-8'>
        <div className='flex flex-row items-center justify-between w-full max-w-[1842px] h-8'>
          <div className='flex items-center gap-3'>
            <span className='hidden xs:block'>Ordernar por:</span>
            <Select
              changeValue={setSort}
              options={[sortOptions.ID, sortOptions.MODIFICACIONES, sortOptions.ESTADO, sortOptions.APELLIDO, sortOptions.NOBMRE, sortOptions.OCUPACION, sortOptions.TIPO]}
              value={sort}
            />
          </div>
          <AddUsers />
        </div>
        {
          sortedUsers
            ? <Users users={sortedUsers} />
            : <h3 className='text-xl font-bold'>No se encontro ningun usuario</h3>
        }
      </main>
    </div>
  )
}

export default App
