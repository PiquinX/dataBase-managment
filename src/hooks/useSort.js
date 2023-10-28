import { useState } from 'react'
import { sortOptions } from '../constants/sortOptions'

export function useSort () {
  const [sort, setSort] = useState(sortOptions.ID)

  const sortUsers = (users) => {
    // If there is no users it returns null
    if (users === null || users === undefined) return null

    console.log(users)

    // Sort the users depending on a parameter.
    if (sort === sortOptions.MODIFICACIONES) return users.filter(user => user.faltaSubirlo)
    else if (sort === sortOptions.ESTADO) return users.filter(user => user.estado).sort((a, b) => a.estado.localeCompare(b.estado))
    else if (sort === sortOptions.ID) return users.sort((a, b) => a - b)
    else if (sort === sortOptions.APELLIDO) return users.sort((a, b) => a.apellido.localeCompare(b.apellido))
    else if (sort === sortOptions.NOBMRE) return users.sort((a, b) => a.nombre.localeCompare(b.nombre))
    else if (sort === sortOptions.TIPO) return users.filter(user => user.tipo).sort((a, b) => a.tipo?.localeCompare(b.tipo))
    else if (sort === sortOptions.OCUPACION) return users.filter(user => user.ocupacion).sort((a, b) => a.ocupacion?.localeCompare(b.ocupacion))
    else return users
  }
  return { sort, setSort, sortUsers }
}
