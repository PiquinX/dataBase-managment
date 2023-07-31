export function Movies ({ movies, isBeforeSearch }){
    return (
        <>
            {
                !isBeforeSearch ? (
                    movies ?
                    (
                    <ul className='grid w-full place-items-center'>
                        {
                        movies?.map(movie => (
                            <li key={movie.id}>
                            <h4>{movie.title}</h4>
                            <img src={movie.poster} alt={movie.title} />
                            <p>{movie.year}</p>
                            </li>
                        ))
                        }
                    </ul>
                    )
                    : <p>No se encontro ninguna pelicula</p>
                    )
                : <p>Busca la pelicula que quieras</p>
            }
        </>
    )
}