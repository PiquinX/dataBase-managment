export const removeUserInfo = async (valuesToRemove) => {
  try {
    const res = await fetch('http://127.0.0.1:5000/delete_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(valuesToRemove)
    })
    const resul = await res.json()

    return resul.message
  } catch (e) {
    throw new Error(e)
  }
}
