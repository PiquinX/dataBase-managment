export function sortMovies (judgment, movies) {
  // Si no hay peliculas devuelve null
  if (movies === null || movies === undefined) return null

  // ordena las peliculas segun el criterio.
  if (judgment === 'From "A" to "Z"') return [...movies].sort((a, b) => a.title.localeCompare(b.title))
  else if (judgment === 'From "Z" to "A"') return [...movies].sort((a, b) => a.title.localeCompare(b.title)).reverse()
  else return movies
}
