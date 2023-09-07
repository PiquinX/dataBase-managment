import { useContext } from "react"
import { UsersContext } from "../contexts/usersContext"

export function useUsers () {
  const { users, refreshUsers } = useContext(UsersContext)

  return ({ users, refreshUsers })
}