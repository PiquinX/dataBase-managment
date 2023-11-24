export const userInfoEmptyState = {
    'usuario':{
        'id': 0,
        'estado': '',
        'tipo': '',
        'dni': '',
        'nacimiento':'',
        'apellido': '',
        'nombre': '',
        'mail': '',
        'cuil': '',
        'movil': '',
        'fijo': '',
        'referente': '',
        'ocupacion': '',
        'fechaDeAlta': '',
        'firma': '',
        'faltaSubirlo': true
    },
    'direcciones': [{
        'calle': '',
        'codigoPostal': '',
        'depto': '',
        'id': '',
        'localidad': '',
        'numero': '',
        'piso': '',
        'provincia': ''
    }],
    'donaciones':[{
        'cantidad': '',
        'id': '',
        'estado_donacion': '',
        'fecha': '',
        'metodoDePago': '',
        'tipo': ''
    }],
    'financieros':[{
        'num_cuenta': '',
        'banco': '',
        'codigoSeguridad': '',
        'id': '',
        'debito': '',
        'estado_financiero': '',
        'sucursal': '',
        'tipoCTA': '',
        'vto': ''
    }],
    'observaciones':[{
        'observacion': '',
        'id': ''
    }]
}