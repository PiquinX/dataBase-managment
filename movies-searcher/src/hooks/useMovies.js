import withResponse from '../API Response/withResponse.json'
import { useState, useRef } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies () {
  const [movies, setMovies] = useState(null)
  const isBeforeSearch = useRef(true)
  const [isSearching, setIsSearching] = useState(false)

  async function getMovies ({ search }) {
    isBeforeSearch.current = false
    setIsSearching(true)

    const formatedMovies = await searchMovies(search)

    setIsSearching(false)
    setMovies(formatedMovies)
  }

  return { movies, getMovies, isBeforeSearch: isBeforeSearch.current, isSearching }
}