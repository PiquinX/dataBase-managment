export function formatUser (user) {
  const formatedUser = {}

  formatedUser['usuario'] = {
    'id': user.usuarios[0].USUARIO_ID,
    'estado': user.usuarios[0].ESTADO_DE_USUARIO,
    'tipo': user.usuarios[0].TIPO_DE_USUARIO,
    'dni': user.usuarios[0].DNI,
    'nacimiento': user.usuarios[0].FECHA_DE_NACIMIENTO,
    'apellido': user.usuarios[0].APELLIDO,
    'nombre': user.usuarios[0].NOMBRE,
    'mail': user.usuarios[0].MAIL,
    'cuil': user.usuarios[0].CUIL_CUIT,
    'movil': user.usuarios[0].TELEFONO_MOVIL,
    'fijo': user.usuarios[0].TELEFONO_MOVIL,
    'referente': user.usuarios[0].REFERENTE,
    'ocupcacion': user.usuarios[0].OCUPACION,
    'fechaDeAlta': user.usuarios[0].DIA_DE_ALTA,
    'firma': user.usuarios[0].FIRMA
  }

  formatedUser['direcciones'] = user.direcciones.map(direccion => ({
    'calle': direccion.CALLE,
    'codigoPostal': direccion.CODIGO_POSTAL,
    'depto': direccion.DEPTO,
    'direccion_id': direccion.DIRECCION_ID,
    'localidad': direccion.LOCALIDAD,
    'numero': direccion.NUM,
    'piso': direccion.PISO,
    'provincia': direccion.PROVINCIA
  }))

  formatedUser['donaciones'] = user.donaciones.map(donacion => ({
    'cantidad': donacion.DONACION,
    'donacion_id': donacion.DONACIONES_ID,
    'estado_donacion': donacion.ESTADO_DE_DONACION,
    'fecha': donacion.FECHA_DE_DONACION,
    'metodoDePago': donacion.FROMA_DE_PAGO,
    'tipo': donacion.TIPO_DE_DONACION
  }))

  formatedUser['financieros'] = user.financieros.map(financiero => ({
    // 'cuenta': financiero.#_CUENTA,
    'banco': financiero.BANCO,
    'codigoSeguridad': financiero.COD_SEG,
    'financiero_id': financiero.DATOS_FINANCIEROS_ID,
    'debito': financiero.DBTO,
    'estado_financiero': financiero.ESTADO,
    'sucursal': financiero.SUCURSAL,
    'tipoCTA': financiero.TIPO_CTA,
    'vto': financiero.VTO
  }))

  formatedUser['observaciones'] = user.observaciones.map(observacion => ({
    'observacion': observacion.OBSERVACIONES,
    'observacion_id': observacion.OBSERVACIONES_ID
  }))

  return formatedUser
}
