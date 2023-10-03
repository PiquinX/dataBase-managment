import { useState } from 'react'
import { sortOptions } from '../constants/sortOptions'

export function useSort () {
  const [sort, setSort] = useState('ID')

  const sortUsers = (users) => {
    // Si no hay usuarios devuelve null
    if (users === null || users === undefined) return null

    // ordena los usuarios segun el criterio.
    if (sort === sortOptions.FALTA_SUBIRLO) return users.filter( user => user.faltaSubirlo )
    else if (sort === sortOptions.ESTADO) return users.sort((a, b) => a.estado.localeCompare(b.estado))
    else if (sort === sortOptions.ID) return users.sort((a, b) => a - b)
    else if (sort === sortOptions.APELLIDO) return users.sort((a, b) => a.apellido.localeCompare(b.apellido))
    else if (sort === sortOptions.NOBMRE) return users.sort((a, b) => a.nombre.localeCompare(b.nombre))
    else return users
  }
  return { sort, setSort, sortUsers }
}