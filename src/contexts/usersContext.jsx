import { createContext, useState } from 'react'
import { getUsers } from '../services/getUsers'

// We create the context, this one is used to be called with the useContext().
export const UsersContext = createContext()

const InitialState = await getUsers()

// We create a provider, this one is used to wrap in the things that we want to be using the context.
export function UsersProvider ({ children }) {
  const [users, setUsers] = useState(InitialState)

  // This gets the all the users.
  const refreshUsers = () => getUsers().then(newUsers => setUsers(newUsers))

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
