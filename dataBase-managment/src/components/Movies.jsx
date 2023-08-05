export function Movies ({ movies, isBeforeSearch }) {
  return (
    <>
      {
                !isBeforeSearch
                  ? (
                      movies
                        ? (
                          <ul className='grid w-[90%] max-w-80% overflow-y-hidden'>
                            <li className='grid gap-0 grid-cols-responsive duration-75 bg-[#172335]'>
                              <p className='w-full col-start-2 px-2 py-1 border'>ID de usuario</p>
                              <p className='w-full px-2 py-1 border h-9'>Estado</p>
                              <p className='w-full px-2 py-1 border h-9'>Tipo</p>
                              <p className='w-full px-2 py-1 border h-9'>N° Documento</p>
                              <p className='w-full px-2 py-1 border h-9'>F. de nacimiento</p>
                              <p className='w-full px-2 py-1 border h-9'>Apellido</p>
                              <p className='w-full px-2 py-1 border h-9'>Nombre</p>
                              <p className='w-full px-2 py-1 border h-9'>Correo</p>
                              <p className='w-full px-2 py-1 border h-9'>CUIL</p>
                              <p className='w-full px-2 py-1 border h-9'>Telefono movil</p>
                              <p className='w-full px-2 py-1 border h-9'>Telefono fijo</p>
                              <p className='w-full px-2 py-1 border h-9'>Referente</p>
                              <p className='w-full px-2 py-1 border h-9'>Ocupacion</p>
                              <p className='w-full px-2 py-1 border h-9'>F. Alta</p>
                              <p className='w-full px-2 py-1 border h-9'>Firma</p>
                            </li>
                            {
                              movies?.map(movie => (
                                <li className='grid grid-cols-responsive duration-75 bg-[#172335]' key={movie.id}>
                                  <p className='w-full col-start-2 px-2 py-1 border' >5u28572</p>
                                  <p className='px-2 py-1 border h-9'>Activo</p>
                                  <p className='px-2 py-1 border h-9'>Socio</p>
                                  <p className='px-2 py-1 border h-9'>46491945</p>
                                  <p className='px-2 py-1 border h-9'>15/03/1990</p>
                                  <p className='px-2 py-1 border h-9'>Albertini</p>
                                  <p className='px-2 py-1 border h-9'>Ricardo</p>
                                  <p className='px-2 py-1 border h-9'>RicaAlber@gmail.com</p>
                                  <p className='px-2 py-1 border h-9'>20-46491945-7</p>
                                  <p className='px-2 py-1 border h-9'>11 4244 5252</p>
                                  <p className='px-2 py-1 border h-9'>+ 4156 5436</p>
                                  <p className='px-2 py-1 border h-9'>REFERENTE</p>
                                  <p className='px-2 py-1 border h-9'>OCUPACION</p>
                                  <p className='px-2 py-1 border h-9'>DIA_DE_ALTA</p>
                                  <p className='px-2 py-1 border h-9'>FIRMA</p>
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
