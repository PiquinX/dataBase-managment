export const getUsers = async () => {
  try {
    const res = await fetch('http://127.0.0.1:5000/get_all_users')
    const users = await res.json()

    return users[0]?.map(user => ({
      'id': user.USUARIO_ID,
      'estado': user.ESTADO_DE_USUARIO,
      'tipo': user.TIPO_DE_USUARIO,
      'dni': user.DNI,
      'nacimiento': user.FECHA_DE_NACIMIENTO,
      'apellido': user.APELLIDO,
      'nombre': user.NOMBRE,
      'mail': user.MAIL,
      'cuil': user.CUIL_CUIT,
      'movil': user.TELEFONO_MOVIL,
      'fijo': user.TELEFONO_FIJO,
      'referente': user.REFERENTE,
      'ocupacion': user.OCUPACION,
      'fechaDeAlta': user.DIA_DE_ALTA,
      'firma': user.FIRMA,
      'faltaSubirlo': user.FALTA_SUBIRLO === "Si" || user.FALTA_SUBIRLO === 1
    }))
  } catch (e) {
    throw new Error(e)
  }
}
