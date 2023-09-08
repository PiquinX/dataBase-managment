import { useRef, useState } from 'react'
import { getUserInfo } from '../services/getUserInfo'

export function useUserInfo ({ ID }) {
  const [userInfo, setUserInfo] = useState(getUserInfo(ID))
  const originalUserInfo = useRef(userInfo)

  const changeInfo = (newValue, whichTable, whichValue) => {
    const newUserInfo = structuredClone(userInfo)

    newUserInfo[whichTable][whichValue] = newValue
    setUserInfo(newUserInfo)
  }

  const resetInfo = () => setUserInfo(originalUserInfo)

  // const saveInfo = ()=> {
  //     saveUserInfo(userInfo)
  // }

  const isInfoChanged = originalUserInfo.current !== userInfo

  return ({ userInfo, changeInfo, isInfoChanged, resetInfo })
}
