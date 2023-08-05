import { useState, useRef, useCallback } from 'react'
import { searchMovies } from '../services/searchMovies'
import { sortMovies } from '../services/sortMovies'

export function useMovies ({ selectValue }) {
  // estado que contiene el resultado de la busqueda (las peliculas).
  const [movies, setMovies] = useState(null)

  // referencia que indica si es antes de que se haya ingresado el primer caracter de la busqueda.
  const isBeforeSearch = useRef(true)

  // estado que contiene si esta cargando o no.
  const [isSearching, setIsSearching] = useState(false)

  // Funcion que controla cuando esta cargando y actualiza el estado de movies.
  const getMovies = useCallback(async ({ search }) => {
    isBeforeSearch.current = false
    setIsSearching(true)

    const formatedMovies = await searchMovies(search)

    setIsSearching(false)

    setMovies(formatedMovies)
  }, [])

  // ordena las peliculas segun el valor del select, si no hay peliculas devuelve null.
  const sortedMovies = useCallback(sortMovies(selectValue, movies), [selectValue, movies])

  return { movies: sortedMovies, getMovies, isBeforeSearch: isBeforeSearch.current, isSearching }
}
