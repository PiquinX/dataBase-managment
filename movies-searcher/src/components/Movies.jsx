export function Movies ({ movies, isBeforeSearch }) {
  return (
    <>
      {
                !isBeforeSearch
                  ? (
                      movies
                        ? (
                          <ul className='grid w-full gap-x-5 gap-y-8 grid-cols-responsive place-items-center'>
                            {
                        movies?.map(movie => (
                          <li className='flex min-w-[350px] gap-4 flex-col items-center duration-75 justify-center bg-[#172335] px-6 py-4 rounded h-[38rem] hover:scale-110 hover:shadow-movies' key={movie.id}>
                            <h4 className='w-full max-w-[18rem] text-xl font-bold text-center line-clamp-1'>{movie.title}</h4>
                            <p className='text-lg'>{movie.year}</p>
                            <img className='rounded' src={movie.poster} alt={movie.title} />
                          </li>
                        ))
                        }
                          </ul>
                          )
                        : <h3 className='text-xl font-bold'>No se encontro ninguna pelicula</h3>
                    )
                  : <h3 className='text-xl font-bold'>Busca la pelicula que quieras</h3>
            }
    </>
  )
}
