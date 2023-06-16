import { useEffect } from 'react'
import { useSelectInteractivity } from './useSelectInteractivity'

export function useSelects () {
  const { select1, select2, select3, changeSelectState } = useSelectInteractivity()

  useEffect(() => {
    document.addEventListener('click', functinalitySelect)

    return () => {
      document.removeEventListener('click', functinalitySelect)
    }
  }, [])

  const functinalitySelect = (e) => {
    const isSelectButton = e.target.matches('[data-dropdown-button]')

    let currentDropdown
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
