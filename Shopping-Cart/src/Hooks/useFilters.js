import { useContext } from 'react'
import { FiltersContext } from '../contexts/filterContext'

export function useFilters () {
  // We call the FiltersContext to get the filters state and the function to change it.
  const { filters, setFilters } = useContext(FiltersContext)

  // This function filters the products using the filters state as reference.
  const filterProducts = (products) => {
    return products.filter(product => {
      return (product.category === filters.category || filters.category === 'all')
    })
  }

  return { filters, setFilters, filterProducts }
}
