import { useContext } from 'react'
import { FiltersContext } from '../contexts/filterContext'

export function useFilters () {
  // We call the FiltersContext to get the filters state and the functions to change it.
  const { clearFilters, changeCategory, changeMinPrice, changeMaxPrice, changeSearch, filters } = useContext(FiltersContext)

  // This function filters the products using the filters state as reference.
  const filterProducts = (products) => {
    return products.filter(product => {
      return ((product.category === filters.category || filters.category === 'all') &&
      product.price > filters.minPrice && product.price < filters.maxPrice &&
      product.title.toLowerCase().includes(filters.search.toLowerCase()))
    })
  }

  return { clearFilters, changeCategory, changeMinPrice, changeMaxPrice, changeSearch, filters, filterProducts }
}
