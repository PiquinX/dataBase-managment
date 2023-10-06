import { updateFaltaSubirlo } from '../services/update/faltaSubirlo'
import { useUsers } from './useUsers'

export function useFaltaSubirlo (id) {
  const { refreshUsers } = useUsers()

  const changeFaltaSubirlo = async () => {
    await updateFaltaSubirlo(id)
    refreshUsers()
  }

  return { changeFaltaSubirlo }
}
