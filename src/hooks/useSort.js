import { useContext } from 'react'
import { SortContext } from '../contexts/sortContext'

export function useSort () {
  const { sort, changeSort } = useContext(SortContext)

  const sortProducts = (users) => {
    // Si no hay usuarios devuelve null
    if (users === null || users === undefined) return null

    // ordena los usuarios segun el criterio.
    if (sort[1]) return [...users].sort((a, b) => a[sort[0]].localeCompare(b[sort[0]])).reverse()
    else return [...users].sort((a, b) => a[sort[0]].localeCompare(b[sort[0]]))
  }
  return { sort, changeSort, sortProducts }
}