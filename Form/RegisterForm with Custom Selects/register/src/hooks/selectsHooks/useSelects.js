import { useEffect } from 'react'
import { useSelectInteractivity } from './useSelectInteractivity'

export function useSelects () {
  // Este hook devuelve el estado de los select y la funcion reinicia todos los estados menos el que se le pase como parametro (sin nada reinicia todo).
  const { select1, select2, select3, changeSelectState } = useSelectInteractivity()

  // agrega el evento que verifica si estas clickeando un select o no y cual.
  useEffect(() => {
    document.addEventListener('click', functinalitySelect)

    return () => {
      document.removeEventListener('click', functinalitySelect)
    }
    }, [])

  const functinalitySelect = (e) => {
    // se fija que le haya dado click a un select
    const isSelectButton = e.target.matches('[data-dropdown-button]')

    let currentDropdown

    // activa el select clickeado y desactiva los demas mediante la funcion del hook useSelectInteractivity().
    if (isSelectButton) {
      currentDropdown = e.target.closest('[data-dropdown]').firstElementChild.id

      if (currentDropdown === 'ano') {
        changeSelectState(1)
      }
      if (currentDropdown === 'turno') {
        changeSelectState(2)
      }
      if (currentDropdown === 'modalidad') {
        changeSelectState(3)
      }
    } else {
      changeSelectState()
    }
  }

  return ({ select1, select2, select3 })
}
