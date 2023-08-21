import { createContext, useEffect, useState } from 'react'

// We create the context, this one is used to be called with the useContext().
export const FiltersContext = createContext()

// We create a provider, this one is used to wrap in the things that we want to be using the context.
export function FiltersProvider ({ children }) {
  // We make a state to save the filters.
  const [filters, setFilters] = useState(()=>{
    return JSON.parse(localStorage.getItem('Filters')) ||
     {
      category: 'all',
      minPrice: 0,
      maxPrice: 2000,
    }
  })

  useEffect(() => {
    localStorage.setItem('Filters', JSON.stringify(filters))
  },[filters])

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
