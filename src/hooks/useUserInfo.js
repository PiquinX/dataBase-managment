import { useEffect, useRef, useState } from 'react'
import { getUserInfo } from '../services/get/getUserInfo'
import { useUsers } from './useUsers'
import { saveUserInfo } from '../services/update/saveUserInfo'
import { userInfoEmptyState } from '../constants/userInfoEmptyState'
import { removeUserInfo } from '../services/remove/removeUserInfo'

export function useUserInfo (ID) {
  const { refreshUsers } = useUsers()
  const [userInfo, setUserInfo] = useState()
  const originalUserInfo = useRef(userInfo)
  const [valuesToRemove, setValuesToRemove] = useState({
    donaciones: [],
    direcciones: [],
    financieros: [],
    observaciones: []
  })

  const refreshUserInfo = () => getUserInfo(ID).then(newUserInfo => {
    setUserInfo(newUserInfo)
    originalUserInfo.current = newUserInfo
  })

  useEffect(() => {
    // We get the info of the user by passing the ID.
    refreshUserInfo()
  }, [])

  // This changes the value of the user, depending on the Field passed.
  const changeInfoUsuario = ({ newValue, whichField }) => {
    const newUserInfo = structuredClone(userInfo)

    newUserInfo.usuario[whichField] = newValue
    setUserInfo(newUserInfo)
  }

  // This changes the value of the user, depending on the Field, and table passed.
  const changeInfo = ({ newValue, whichTable, index, whichField }) => {
    const newUserInfo = structuredClone(userInfo)

    newUserInfo[whichTable][index][whichField] = newValue
    setUserInfo(newUserInfo)
  }

  // This function adds a field to the user state.
  const addInfo = (whichField) => {
    const userInfoCopy = structuredClone(userInfo)

    userInfoCopy[whichField].push(...userInfoEmptyState[whichField])

    setUserInfo(userInfoCopy)
  }


  // This function removes the field from the userInfo state and, if the field was already in the original state it adds it to the valuesToRemove state.
  const removeInfo = (whichField, index) => {
    if (userInfo[whichField][index].id) {
      const valuesToRemoveCopy = structuredClone(valuesToRemove)

      valuesToRemoveCopy[whichField].push(userInfo[whichField][index].id)

      console.log(valuesToRemoveCopy)
      setValuesToRemove(valuesToRemoveCopy)
    }
    const userInfoCopy = structuredClone(userInfo)

    userInfoCopy[whichField].splice(index, 1)

    setUserInfo(userInfoCopy)
  }

  // This save changes and also refresh the Users to be displayed on the table.
  const saveInfo = async () => {
    await saveUserInfo(userInfo)
    await removeUserInfo(valuesToRemove)
    refreshUsers()
  }

  const isInfoChanged = originalUserInfo.current !== userInfo

  return ({ userInfo, changeInfo, isInfoChanged, changeInfoUsuario, saveInfo, addInfo, removeInfo })
}
