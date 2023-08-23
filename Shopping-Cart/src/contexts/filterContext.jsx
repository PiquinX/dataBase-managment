import { createContext } from 'react'
import { useFilterReducer } from '../reducers/Filter/useFilterReducer'

// We create the context, this one is used to be called with the useContext().
export const FiltersContext = createContext()

// We create a provider, this one is used to wrap in the things that we want to be using the context.
export function FiltersProvider ({ children }) {
  // We call the useFiltersReducer to get all the functions and the state.
  const { clearFilters, changeCategory, changeMinPrice, changeMaxPrice, changeSearch, state } = useFilterReducer()

  return (
    <FiltersContext.Provider value={{
      clearFilters,
      changeCategory,
      changeMinPrice,
      changeMaxPrice,
      changeSearch,
      filters: state
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
