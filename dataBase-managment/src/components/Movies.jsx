export function Movies ({ movies, isBeforeSearch }) {
  return (
    <>
      {
                !isBeforeSearch
                  ? (
                      movies
                        ? (
                          <ul className='grid w-max'>
                            <li className='grid gap-0 grid-cols-responsive duration-75 bg-[#172335]'>
                              <p className='col-start-2 px-2 py-1 border w-max'>ID de usuario</p>
                              <p className='w-full px-2 py-1 border h-9'>Estado</p>
                              <p className='w-full px-2 py-1 border h-9'>Tipo</p>
                              <p className='w-full px-2 py-1 border h-9'>N° Documento</p>
                              <p className='w-full px-2 py-1 border h-9'>Fecha de nacimiento</p>
                              <p className='w-full px-2 py-1 border h-9'>Apellido</p>
                              <p className='w-full px-2 py-1 border h-9'>Nombre</p>
                              <p className='w-full px-2 py-1 border h-9'>Correo Electronico</p>
                              <p className='w-full px-2 py-1 border h-9'>CUIL</p>
                              <p className='w-full px-2 py-1 border h-9'>Telefono movil</p>
                              <p className='w-full px-2 py-1 border h-9'>Telefono fijo</p>
                              <p className='w-full px-2 py-1 border h-9'>Referente</p>
                              <p className='w-full px-2 py-1 border h-9'>Ocupacion</p>
                              <p className='w-full px-2 py-1 border h-9'>Dia de alta</p>
                              <p className='w-full px-2 py-1 border h-9'>Firma</p>
                            </li>
                            {
                              movies?.map(movie => (
                                <li className='grid grid-cols-responsive duration-75 bg-[#172335]' key={movie.id}>
                                  <p className='col-start-2 px-2 py-1 w-max' >{movie.id[0]}</p>
                                  <p className='px-2 py-1 w-max'>Activo</p>
                                  <p className='px-2 py-1 w-max'>Socio</p>
                                  <p className='px-2 py-1 w-max'>46491945</p>
                                  <p className='px-2 py-1 w-max'>15/03/1990</p>
                                  <p className='px-2 py-1 w-max'>Albertini</p>
                                  <p className='px-2 py-1 w-max'>Ricardo</p>
                                  <p className='px-2 py-1 w-max'>RicaAlber@gmail.com</p>
                                  <p className='px-2 py-1 w-max'>20-46491945-7</p>
                                  <p className='px-2 py-1 w-max'>11 4244 5252</p>
                                  <p className='px-2 py-1 w-max'>+ 4156 5436</p>
                                  <p className='px-2 py-1 w-max'>REFERENTE</p>
                                  <p className='px-2 py-1 w-max'>OCUPACION</p>
                                  <p className='px-2 py-1 w-max'>DIA_DE_ALTA</p>
                                  <p className='px-2 py-1 w-max'>FIRMA</p>
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
