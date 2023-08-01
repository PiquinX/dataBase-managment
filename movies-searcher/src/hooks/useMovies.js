import { useState, useRef, useCallback } from 'react'
import { searchMovies } from '../services/searchMovies'
import { sortMovies } from '../services/sortMovies'

export function useMovies ({selectValue}) {
  const [movies, setMovies] = useState(null)
  const isBeforeSearch = useRef(true)
  const [isSearching, setIsSearching] = useState(false)

  const getMovies = useCallback(async ({ search }) =>  {
      isBeforeSearch.current = false
      setIsSearching(true)
  
      const formatedMovies = await searchMovies(search)
  
      setIsSearching(false)
  
      setMovies(formatedMovies)
  }, [])

  const sortedMovies = useCallback(sortMovies(selectValue, movies), [selectValue, movies])
  

  return { movies: sortedMovies, getMovies, isBeforeSearch: isBeforeSearch.current, isSearching }
}