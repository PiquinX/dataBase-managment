export const getUserInfo = async (userInfo) => {
  try {
    const res = await fetch(`http://127.0.0.1:5000/update_data/${userInfo.usuario.id}`, {
        method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
    const resul = await res.json()

    return resul
  } catch (e) {
    throw new Error('No user found')
  }
}