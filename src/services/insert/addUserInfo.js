export const addUserInfo = async (whichTable, ID) => {
  console.log(whichTable, ID)
    try {
        const res = await fetch(`http://127.0.0.1:5000/insert_data/${whichTable}/${ID}`,{
          method: 'POST'
        })
        const resul = await res.json()
    
        return resul.message
      } catch (e) {
        throw new Error(e)
      }
}