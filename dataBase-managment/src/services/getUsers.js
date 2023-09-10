export const getUsers = async () => {
  try {
    const res = await fetch('http://127.0.0.1:5000/get_all_users')
    const users = await res.json()

    return users?.map(user => ({
      id: user.id,
      estado: user.estado,
      tipo: user.tipo,
      dni: user.dni,
      nacimiento: user.nacimiento,
      apellido: user.apellido,
      nombre: user.nombre,
      mail: user.mail,
      cuil: user.cuil,
      movil: user.movil,
      fijo: user.fijo,
      referente: user.referente,
      ocupcacion: user.ocupacion,
      fechaDeAlta: user.fechaDeAlta,
      firma: user.firma
    }))
  } catch (e) {
    throw new Error('No users found')
  }
}
