import { useEffect, useRef, useState } from 'react'
import { getUserInfo } from '../services/getUserInfo'
import { useUsers } from './useUsers'
import { saveUserInfo } from '../services/saveUserInfo'

export function useUserInfo (ID) {
  const { refreshUsers } = useUsers()
  const [userInfo, setUserInfo] = useState()
  const originalUserInfo = useRef(userInfo)

  useEffect(() => {
    // We get the info of the user by passing the ID.
    getUserInfo(ID).then(newUserInfo => {
      setUserInfo(newUserInfo)
      originalUserInfo.current = newUserInfo
    })
  }, [])

  // This changes the value of the user, depending on the Field passed.
  const changeInfoUsuarios = ({ newValue, whichField }) => {
    const newUserInfo = structuredClone(userInfo)

    newUserInfo['usuario'][whichField] = newValue
    setUserInfo(newUserInfo)
  }

  
  // This changes the value of the user, depending on the Field, and table passed.
  const changeInfo = ({ newValue, whichTable, index, whichField }) => {
    const newUserInfo = structuredClone(userInfo)

    newUserInfo[whichTable][index][whichField] = newValue
    setUserInfo(newUserInfo)
  }

  // This save changes and also refresh the Users to be displayed on the table.
  const saveInfo = async () => {
    await saveUserInfo(userInfo)
    refreshUsers()
  }

  const isInfoChanged = originalUserInfo.current !== userInfo

  return ({ userInfo, changeInfo, isInfoChanged, changeInfoUsuarios, saveInfo })
}
