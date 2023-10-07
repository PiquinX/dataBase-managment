import { updateFaltaSubirlo } from '../services/update/faltaSubirlo'
import { useUsers } from './useUsers'

export function useFaltaSubirlo (id) {
  const { refreshUsers } = useUsers()

  // This function updates the faltaSubirlo with a fetch and refreshes the userState.
  const changeFaltaSubirlo = async () => {
    await updateFaltaSubirlo(id)
    refreshUsers()
  }

  return { changeFaltaSubirlo }
}
