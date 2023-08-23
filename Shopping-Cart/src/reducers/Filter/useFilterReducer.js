import { useReducer, useEffect } from 'react'
import { FILTER_FUNCTION_NAMES, InitialFilters, FilterReducer } from './FilterReducer'

export function useFilterReducer () {
  // We call the useReducer Hook and passed the FilterReducer, which contains the functions, and the initial value. And we get the state and the function that allows us to call the functions that we want.
  const [state, dispatch] = useReducer(FilterReducer, InitialFilters)

  // We call the clear function.
  const clearFilters = () => dispatch({
    type: FILTER_FUNCTION_NAMES.clear
  })

  // We call the changeCategory function passing the newCategory as a payload(prop).
  const changeCategory = newCategory => dispatch({
    type: FILTER_FUNCTION_NAMES.category,
    payload: newCategory
  })

  // We call the changeMinPrice function passing the newMinPrice as a payload(prop).
  const changeMinPrice = newMinPrice => dispatch({
    type: FILTER_FUNCTION_NAMES.minPrice,
    payload: newMinPrice
  })

  // We call the changeMaxPrice function passing the newMaxPrice as a payload(prop).
  const changeMaxPrice = newMaxPrice => dispatch({
    type: FILTER_FUNCTION_NAMES.maxPrice,
    payload: newMaxPrice
  })

  // We call the changeSearch function passing the newSearch as a payload(prop).
  const changeSearch = newSearch => dispatch({
    type: FILTER_FUNCTION_NAMES.search,
    payload: newSearch
  })

  // This Effect saves the Filters on the local storage each time the state changes.
  useEffect(() => {
    localStorage.setItem('Filters', JSON.stringify(state))
  }, [state])

  return { clearFilters, changeCategory, changeMinPrice, changeMaxPrice, changeSearch, state }
}
