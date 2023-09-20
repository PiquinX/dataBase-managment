import { useEffect, useRef, useState } from 'react'
import { getUserInfo } from '../services/getUserInfo'
import { useUsers } from './useUsers'
import { saveUserInfo } from '../services/saveUserInfo'
import { userInfoEmptyState } from '../constants/userInfoEmptyState'


export function useAddUser () {
  // const { refreshUsers } = useUsers()
  const [newUser, setNewUser] = useState(()=> JSON.parse(localStorage.getItem('newUser')) || userInfoEmptyState )

  // This changes the value of the user, depending on the Field passed.
  const changeInfoUsuario = ({ newValue, whichField }) => {
    const newUserCopy = structuredClone(newUser)

    newUserCopy['usuario'][whichField] = newValue
    setNewUser(newUserCopy)
  }

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

  const addInfo = (whichField) => {
    const newUserCopy = structuredClone(newUser)

    newUserCopy[whichField].push(...userInfoEmptyState[whichField])

    setNewUser(newUserCopy)
  }

  // This save changes and also refresh the Users to be displayed on the table.
  // const addUser = async () => {
  //   await saveUserInfo(userInfo)
  //   refreshUsers()
  // }

  useEffect(()=>{
    localStorage.setItem('newUser', JSON.stringify(newUser))
  },[newUser])

  const isInfoChanged = userInfoEmptyState !== newUser

  return ({ newUser, changeInfo, changeInfoUsuario, isInfoChanged, addInfo, clearNewUser })
}
