import { formatUser } from "./formatUser"

export const getInfoOfOneUser = async () => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1c74998f&s=${search}`)
      const response = await res.json()
      const user = response.Search
  
      return formatUser(user)
    } catch (e) {
      throw new Error('No movies found')
    }
}