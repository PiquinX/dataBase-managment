export const searchMovies = async (search) => {
  if (search === '') return null

  try {
    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1c74998f&s=${search}`)
    const response = await res.json()
    const movies = response.Search

    // devuelve las peliculas formateadas (para tener un objeto custom en vez del que no da la API).
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('No movies found')
  }
}
