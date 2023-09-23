export const createNewUser = async (newUser) => {
  try {
    const res = await fetch(`http://127.0.0.1:5000/insert_full_data`, {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
    const resul = await res.json()
    
    console.log(resul.message)

    return resul
  } catch (e) {
    throw new Error('No user found')
  }
}