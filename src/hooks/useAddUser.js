import { useEffect, useState } from 'react'
import { createNewUser } from '../services/createNewUser'
import { userInfoEmptyState } from '../constants/userInfoEmptyState'
import {useUsers} from '../hooks/useUsers'


export function useAddUser () {
  const { refreshUsers } = useUsers()
  const [newUser, setNewUser] = useState(()=> JSON.parse(localStorage.getItem('newUser')) || userInfoEmptyState )

  // This changes the value of the user, depending on the Field passed.
  const changeInfoUsuario = ({ newValue, whichField }) => {
    const newUserCopy = structuredClone(newUser)

    newUserCopy['usuario'][whichField] = newValue
    setNewUser(newUserCopy)
  }

  // This sets the newUsers to its default value.
  const clearNewUser = () => {
    setNewUser(userInfoEmptyState)
    localStorage.removeItem('newUser')
  }

  
  // This changes the value of the user, depending on the Field, and table passed.
  const changeInfo = ({ newValue, whichTable, index, whichField }) => {
    const newUserCopy = structuredClone(newUser)

    newUserCopy[whichTable][index][whichField] = newValue
    setNewUser(newUserCopy)
  }

  // This functions add an array to the selected table.
  const addInfo = (whichField) => {
    const newUserCopy = structuredClone(newUser)

    newUserCopy[whichField].push(...userInfoEmptyState[whichField])

    setNewUser(newUserCopy)
  }

  // This save changes and also refresh the Users to be displayed on the table.
   const addUser = async () => {
     await createNewUser(newUser)
     refreshUsers()
   }

  useEffect(()=>{
    localStorage.setItem('newUser', JSON.stringify(newUser))
  },[newUser])

  const isInfoChanged = userInfoEmptyState !== newUser

  return ({ newUser, changeInfo, changeInfoUsuario, isInfoChanged, addInfo, clearNewUser, addUser })
}
