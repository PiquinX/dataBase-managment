import { useEffect, useRef, useState } from 'react'
import { getUserInfo } from '../services/getUserInfo'
import { useUsers } from './useUsers'

export function useUserInfo (ID) {
  const { refreshUsers } = useUsers()
  const [userInfo, setUserInfo] = useState()
  const originalUserInfo = useRef(userInfo)

  useEffect(() => {
    getUserInfo(ID).then(newUserInfo => {
      setUserInfo(newUserInfo)
      originalUserInfo.current = newUserInfo
    })
  }, [])

  const changeInfoUsuarios = ({ newValue, whichField }) => {
    const newUserInfo = structuredClone(userInfo)

    newUserInfo['usuario'][whichField] = newValue
    setUserInfo(newUserInfo)
  }

  const changeInfo = ({ newValue, whichTable, index, whichField }) => {
    const newUserInfo = structuredClone(userInfo)

    newUserInfo[whichTable][index][whichField] = newValue
    setUserInfo(newUserInfo)
  }

  const resetInfo = () => setUserInfo(originalUserInfo)

  // const saveInfo = ()=> {
  //     saveUserInfo(userInfo)
  // }

  const isInfoChanged = originalUserInfo.current !== userInfo

  return ({ userInfo, changeInfo, isInfoChanged, resetInfo, changeInfoUsuarios })
}
