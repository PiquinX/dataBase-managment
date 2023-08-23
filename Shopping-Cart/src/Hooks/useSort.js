import { useContext } from 'react'
import { SortContext } from '../contexts/sortContext'
import { sortOptions } from '../services/sortOptions'
import { applyDiscount } from '../services/applyDiscount'

export function useSort () {
  const { sort, setSort } = useContext(SortContext)

  const sortProducts = (products) => {
    // Si no hay peliculas devuelve null
    if (products === null || products === undefined) return null

    // ordena las peliculas segun el criterio.
    if (sort === sortOptions.FROM_A_TO_Z) return [...products].sort((a, b) => a.title.localeCompare(b.title))
    else if (sort === sortOptions.FROM_Z_TO_A) return [...products].sort((a, b) => a.title.localeCompare(b.title)).reverse()
    else if (sort === sortOptions.PRICE_LOW_TO_HIGH) return [...products].sort((a, b) => applyDiscount(a) - applyDiscount(b))
    else if (sort === sortOptions.PRICE_HIGH_TO_LOW) return [...products].sort((a, b) => applyDiscount(a) - applyDiscount(b)).reverse()
    else if (sort === sortOptions.DISCOUNT_LOW_TO_HIGH) return [...products].sort((a, b) => a.discountPercentage - b.discountPercentage)
    else if (sort === sortOptions.DISCOUNT_HIGH_TO_LOW) return [...products].sort((a, b) => a.discountPercentage - b.discountPercentage).reverse()
    else return products
  }

  return { sort, setSort, sortProducts }
}
