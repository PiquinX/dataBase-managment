import { formatUser } from './formatUser'

export const getUserInfo = async (ID) => {
  try {
    const res = await fetch(`http://127.0.0.1:5000/get_all_by_ID/${ID}`)
    const userInfo = await res.json()
    console.log(userInfo)

    return formatUser(userInfo)
  } catch (e) {
    throw new Error('No user found')
  }
}
