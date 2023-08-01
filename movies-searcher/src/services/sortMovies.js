export function sortMovies(judgment, movies) {
    if(movies === null || movies === undefined) return null

    if(judgment === 'Alfabeticamente (A - Z)')return [...movies].sort((a, b) => a.title.localeCompare(b.title))
    else if(judgment === 'Alfabeticamente (Z - A)')return [...movies].sort((a, b) => a.title.localeCompare(b.title)).reverse()
    else return movies
}