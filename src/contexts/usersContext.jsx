import { createContext, useEffect, useState } from 'react'
import { getUsers } from '../services/getUsers'

// We create the context, this one is used to be called with the useContext().
export const UsersContext = createContext()

// We create a provider, this one is used to wrap in the things that we want to be using the context.
export function UsersProvider ({ children }) {
  const [users, setUsers] = useState()

  // This gets the all the users.
  const refreshUsers = () => getUsers().then(newUsers => setUsers(newUsers))

  useEffect(()=> refreshUsers(), [])

  return (
    <UsersContext.Provider value={{
      users,
      refreshUsers
    }}
    >
      {children}
    </UsersContext.Provider>
  )
}
