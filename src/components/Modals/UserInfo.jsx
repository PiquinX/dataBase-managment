import { useRef } from "react"

export function DataUserSection ({ isDisplayed, updateInfo, data }) {
  // this ref contains the full name of the user in case, the we change it.
  const userName = useRef(`${data.nombre} ${data.apellido}`)
  
  const dataStyle = isDisplayed ? 'block' : 'hidden'

  // changing the value depending on the field and value
  const handleChange = (value, field) => {
    updateInfo({ newValue: value, whichField: field })
  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} h-full px-6 flex flex-col gap-4`} >
              <h4 className="text-xl">{userName.current} - {data.id}</h4>
              <div className='flex flex-col gap-3 text-black'>
                <InfoInputs defaultValue={data.nombre} placeHolder={'Nombre'} onChange={(e)=> handleChange(e.target.value, 'nombre')} />
                <InfoInputs defaultValue={data.apellido} placeHolder={'Apellido'} onChange={(e)=> handleChange(e.target.value, 'apellido')} />
                <InfoInputs defaultValue={data.estado} placeHolder={'Estado'} onChange={(e)=> handleChange(e.target.value, 'estado')} />
                <InfoInputs defaultValue={data.nacimiento} placeHolder={'Nacimiento'} onChange={(e)=> handleChange(e.target.value, 'nacimiento')} />
                <InfoInputs defaultValue={data.dni} placeHolder={'DNI'} onChange={(e)=> handleChange(e.target.value, 'dni')} type='number' />
                <InfoInputs defaultValue={data.tipo} placeHolder={'Tipo'} onChange={(e)=> handleChange(e.target.value, 'tipo')} />
                <InfoInputs defaultValue={data.mail} placeHolder={'Mail'} onChange={(e)=> handleChange(e.target.value, 'mail')} type='email' />
                <InfoInputs defaultValue={data.cuil} placeHolder={'Cuil/Cuit'} onChange={(e)=> handleChange(e.target.value, 'cuil')} type='number' />
                <InfoInputs defaultValue={data.movil} placeHolder={'Movil'} onChange={(e)=> handleChange(e.target.value, 'movil')} />
                <InfoInputs defaultValue={data.fijo} placeHolder={'Fijo'} onChange={(e)=> handleChange(e.target.value, 'fijo')} />
                <InfoInputs defaultValue={data.referente} placeHolder={'Referente'} onChange={(e)=> handleChange(e.target.value, 'referente')} />
                <InfoInputs defaultValue={data.ocupcacion} placeHolder={'Ocupacion'} onChange={(e)=> handleChange(e.target.value, 'ocupcacion')} />
                <InfoInputs defaultValue={data.fechaDeAlta} placeHolder={'Fecha de alta'} onChange={(e)=> handleChange(e.target.value, 'fechaDeAlta')} />
                <InfoInputs defaultValue={data.firma} placeHolder={'Firma'} onChange={(e)=> handleChange(e.target.value, 'firma')} />
              </div>
            </div>
        }
    </>
  )
}

export function DataAdressSection ({ isDisplayed, updateInfo, data }) {
  const dataStyle = isDisplayed ? 'block' : 'hidden'

  // changing the value depending on the field and value
  const handleChange = (value, index, field) => {
    updateInfo({ newValue: value, whichTable: 'direcciones', index, whichField: field })
  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} h-full px-6`}>
              {
              (data[0].numero === null || data[0].numero === undefined)
                ? <h4 className="text-xl">Este usuario no tiene direcciones</h4>
                : (
                    data.map((direccion, index) => (
                      <div key={direccion.direccion_id} className="flex flex-col gap-4">
                        <h4 className="text-xl">{direccion.calle} {direccion.numero} - id: {direccion.direccion_id}</h4>
                        <div className='flex flex-col gap-3 text-black'>
                          <InfoInputs defaultValue={direccion.calle} placeHolder={'Calle'} onChange={(e)=> handleChange(e.target.value, index, 'calle')} />
                          <InfoInputs defaultValue={direccion.numero} placeHolder={'Numero'} onChange={(e)=> handleChange(e.target.value, index, 'numero')} />
                          <InfoInputs defaultValue={direccion.piso} placeHolder={'Piso'} onChange={(e)=> handleChange(e.target.value, index, 'piso')} />
                          <InfoInputs defaultValue={direccion.localidad} placeHolder={'Localidad'} onChange={(e)=> handleChange(e.target.value, index, 'localidad')} />
                          <InfoInputs defaultValue={direccion.codigoPostal} placeHolder={'Codigo Postal'} onChange={(e)=> handleChange(e.target.value, index, 'codigoPostal')} />
                          <InfoInputs defaultValue={direccion.provincia} placeHolder={'Provincia'} onChange={(e)=> handleChange(e.target.value, index, 'provincia')} />
                        </div>
                      </div>
                    ))
                  )
            }
            </div>
        }
    </>
  )
}

export function DataDonationsSection ({ isDisplayed, updateInfo, data }) {
  const dataStyle = isDisplayed ? 'block' : 'hidden'

  // changing the value depending on the field and value
  const handleChange = (value, index, field) => {
    updateInfo({ newValue: value, whichTable: 'donaciones', index, whichField: field })
  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} h-full px-6`}>
              {
                  data.map((donacion, index) => (
                    <div key={donacion.donacion_id} className="flex flex-col gap-4">
                      <h4 className="text-xl">Donacion - {donacion.donacion_id}</h4>
                      <div className='flex flex-col gap-3 text-black'>
                        <InfoInputs defaultValue={`${donacion.cantidad}`} placeHolder={'Cantidad'} onChange={(e)=> handleChange(e.target.value, index, 'cantidad')} />
                        <InfoInputs defaultValue={donacion.estado_donacion} placeHolder={'Estado'} onChange={(e)=> handleChange(e.target.value, index, 'estado_donacion')} />
                        <InfoInputs defaultValue={donacion.fecha} placeHolder={'Fecha'} onChange={(e)=> handleChange(e.target.value, index, 'fecha')} />
                        <InfoInputs defaultValue={donacion.metodoDePago} placeHolder={'Metodo de pago'} onChange={(e)=> handleChange(e.target.value, index, 'metodoDePago')} />
                        <InfoInputs defaultValue={donacion.tipo} placeHolder={'Tipo'} onChange={(e)=> handleChange(e.target.value, index, 'tipo')} />
                      </div>
                    </div>
                  ))
            }
            </div>
        }
    </>
  )
}

export function DataFinancialSection ({ isDisplayed, updateInfo, data }) {
  const dataStyle = isDisplayed ? 'block' : 'hidden'

  // changing the value depending on the field and value
  const handleChange = (value, index, field) => {
    updateInfo({ newValue: value, whichTable: 'financieros', index, whichField: field })
  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} h-full px-6`}>
              {
                  data.map((financiero, index) => (
                    <div key={financiero.financiero_id} className="flex flex-col gap-4">
                      <h4 className="text-xl">Financiero - {financiero.financiero_id}</h4>
                      <div className='flex flex-col gap-3 text-black'>
                        <InfoInputs defaultValue={financiero.banco} placeHolder={'Banco'} onChange={(e)=> handleChange(e.target.value, index, 'banco')} />
                        <InfoInputs defaultValue={financiero.codigoSeguridad} placeHolder={'Codigo de seguridad'} onChange={(e)=> handleChange(e.target.value, index, 'codigoSeguridad')} />
                        <InfoInputs defaultValue={financiero.debito} placeHolder={'Debito'} onChange={(e)=> handleChange(e.target.value, index, 'debito')} />
                        <InfoInputs defaultValue={financiero.estado_financiero} placeHolder={'Estado'} onChange={(e)=> handleChange(e.target.value, index, 'estado_financiero')} />
                        <InfoInputs defaultValue={financiero.sucursal} placeHolder={'Sucursal'} onChange={(e)=> handleChange(e.target.value, index, 'sucursal')} />
                        <InfoInputs defaultValue={financiero.tipoCTA} placeHolder={'Tipo CTA'} onChange={(e)=> handleChange(e.target.value, index, 'tipoCTA')} />
                        <InfoInputs defaultValue={financiero.vto} placeHolder={'VTO'} onChange={(e)=> handleChange(e.target.value, index, 'vto')} />
                      </div>
                    </div>
                  ))
            }
            </div>
        }
    </>
  )
}

export function DataObservationsSection ({ isDisplayed, updateInfo, data }) {
  const dataStyle = isDisplayed ? 'block' : 'hidden'

  // changing the value depending on the field and value
  const handleChange = (value, index, field) => {
    updateInfo({ newValue: value, whichTable: 'observaciones', index, whichField: field })
  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} h-full px-6`}>
              {
                  data.map((observacion, index) => (
                    <div key={observacion.observacion_id} className="flex flex-col gap-4">
                      <h4 className="text-xl">Observacion - {observacion.observacion_id}</h4>
                      <div className='flex flex-col gap-3 text-black'>
                        <textarea 
                          defaultValue={observacion.observacion} 
                          onChange={(e)=> handleChange(e.target.value, index, 'observacion')} 
                          className='resize-none' />
                      </div>
                    </div>
                  ))
            }
            </div>
        }
    </>
  )
}


function InfoInputs({ placeHolder, defaultValue, onChange }){
  return(
    <div className="relative w-64 h-10" >
      <label className="absolute bg-[#375786] text-white left-2 -top-3 px-1">{placeHolder}</label>
      <input defaultValue={defaultValue} onChange={onChange} className="w-full h-full pl-2 font-bold text-white bg-transparent border-2 rounded outline-none" />
    </div>
  )
}
