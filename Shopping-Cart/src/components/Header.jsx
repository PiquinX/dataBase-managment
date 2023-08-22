import { Cart } from './Cart'
import { useFilters } from '../Hooks/useFilters'

export function Header () {
  const { filters, setFilters } = useFilters()

  const handleChange = (event) => {
    const newSearch = event.target.value

    // si se ingresa un espacio si un caracter antes no carga el valor al input.
    if (newSearch === ' ') return

    // Actualiza el valor del input (la busqueda).
    setFilters(prevFilters => ({
      ...prevFilters,
      search: newSearch
    }))
  }

  // reinicia la busqueda
  const restartSearch = () => {
    setFilters(prevFilters => ({
      ...prevFilters,
      search: ''
    }))
  }

  console.log(filters)

  const inputClass = filters.search.length > 0 ? 'w-44 pl-10 pr-7 border-white' : 'w-6 pl-6 border-transparent'
  const xmarkClass = filters.search.length > 0 ? 'block' : 'hidden'

  return (
    <header className='sticky top-0 z-40 h-24 bg-blue-700'>
      <div className='absolute right-0 mr-24 top-[1.65rem] group'>
        <input id='search' onChange={handleChange} value={filters.search} placeholder='Search' className={`${inputClass} outline-0 px-3 py-1 duration-100 bg-transparent text-white border-2 rounded focus:w-44 focus:border-white focus:pl-10`} />
        <label htmlFor='search'>
          <i className='text-white absolute top-0 left-0 px-[.56rem] py-[0.15rem] text-2xl fa-solid fa-magnifying-glass cursor-pointer' htmlFor='search' />
        </label>
        <label htmlFor='search'>
          <i onClick={restartSearch} className={`${xmarkClass} text-white absolute top-0 right-0 px-[.53rem] py-1 text-xl fa-solid fa-xmark cursor-pointer`} htmlFor='search' />
        </label>
      </div>
      <Cart />
    </header>
  )
}
