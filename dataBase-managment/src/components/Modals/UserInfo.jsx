import { useRef } from "react"

export function DataUserSection ({ isDisplayed, updateInfo, data }) {
  const userName = useRef(`${data.nombre} ${data.apellido}`)
  const dataStyle = isDisplayed ? 'block' : 'hidden'

  const handleChange = (value, field) => {
    updateInfo({ newValue: value, whichField: field })
  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} overflow-auto h-full px-6`}>
              <h4>{userName.current} - {data.id}</h4>
              <div className='flex flex-col gap-3 text-black'>
                <input defaultValue={data.nombre} onChange={(e)=> handleChange(e.target.value, 'nombre')} />
                <input defaultValue={data.apellido} onChange={(e)=> handleChange(e.target.value, 'apellido')} />
                <input defaultValue={data.estado} onChange={(e)=> handleChange(e.target.value, 'estado')} />
                <input defaultValue={data.nacimiento} onChange={(e)=> handleChange(e.target.value, 'nacimiento')} />
                <input defaultValue={data.dni} onChange={(e)=> handleChange(e.target.value, 'dni')} type='number' />
                <input defaultValue={data.tipo} onChange={(e)=> handleChange(e.target.value, 'tipo')} />
                <input defaultValue={data.mail} onChange={(e)=> handleChange(e.target.value, 'mail')} type='email' />
                <input defaultValue={data.cuil} onChange={(e)=> handleChange(e.target.value, 'cuil')} type='number' />
                <input defaultValue={data.movil} onChange={(e)=> handleChange(e.target.value, 'movil')} />
                <input defaultValue={data.fijo} onChange={(e)=> handleChange(e.target.value, 'fijo')} />
                <input defaultValue={data.referente} onChange={(e)=> handleChange(e.target.value, 'referente')} />
                <input defaultValue={data.ocupcacion} onChange={(e)=> handleChange(e.target.value, 'ocupcacion')} />
                <input defaultValue={data.fechaDeAlta} onChange={(e)=> handleChange(e.target.value, 'fechaDeAlta')} />
                <input defaultValue={data.firma} onChange={(e)=> handleChange(e.target.value, 'firma')} />
              </div>
            </div>
        }
    </>
  )
}

export function DataAdressSection ({ isDisplayed, updateInfo, data }) {
  const dataStyle = isDisplayed ? 'block' : 'hidden'

  const handleChange = (value, index, field) => {
    updateInfo({ newValue: value, whichTable: 'direcciones', index, whichField: field })
  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} overflow-auto h-full px-6`}>
              {
              (data[0].numero === null || data[0].numero === undefined)
                ? <h4>Este usuario no tiene direcciones</h4>
                : (
                    data.map((direccion, index) => (
                      <div key={direccion.direccion_id}>
                        <h4>{direccion.calle} {direccion.numero} - id: {direccion.direccion_id}</h4>
                        <div className='flex flex-col gap-3 text-black'>
                          <input defaultValue={direccion.calle} onChange={(e)=> handleChange(e.target.value, index, 'calle')} />
                          <input defaultValue={direccion.numero} onChange={(e)=> handleChange(e.target.value, index, 'numero')} />
                          <input defaultValue={direccion.piso} onChange={(e)=> handleChange(e.target.value, index, 'piso')} />
                          <input defaultValue={direccion.localidad} onChange={(e)=> handleChange(e.target.value, index, 'localidad')} />
                          <input defaultValue={direccion.codigoPostal} onChange={(e)=> handleChange(e.target.value, index, 'codigoPostal')} />
                          <input defaultValue={direccion.provincia} onChange={(e)=> handleChange(e.target.value, index, 'provincia')} />
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

  const handleChange = (value, index, field) => {
    updateInfo({ newValue: value, whichTable: 'donaciones', index, whichField: field })
  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} overflow-auto h-full px-6`}>
              {
                  data.map((donacion, index) => (
                    <div key={donacion.donacion_id}>
                      <h4>Donacion - {donacion.donacion_id}</h4>
                      <div className='flex flex-col gap-3 text-black'>
                        <input defaultValue={`${donacion.cantidad}`} onChange={(e)=> handleChange(e.target.value, index, 'cantidad')} />
                        <input defaultValue={donacion.estado} onChange={(e)=> handleChange(e.target.value, index, 'estado')} />
                        <input defaultValue={donacion.fecha} onChange={(e)=> handleChange(e.target.value, index, 'fecha')} />
                        <input defaultValue={donacion.metodoDePago} onChange={(e)=> handleChange(e.target.value, index, 'metodoDePago')} />
                        <input defaultValue={donacion.tipo} onChange={(e)=> handleChange(e.target.value, index, 'tipo')} />
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

  const handleChange = (value, index, field) => {
    console.log(index)
    updateInfo({ newValue: value, whichTable: 'financieros', index, whichField: field })
  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} overflow-auto h-full px-6`}>
              {
                  data.map((financiero, index) => (
                    <div key={financiero.financiero_id}>
                      <h4>Financiero - {financiero.financiero_id}</h4>
                      <div className='flex flex-col gap-3 text-black'>
                        <input defaultValue={financiero.banco} onChange={(e)=> handleChange(e.target.value, index, 'banco')} />
                        <input defaultValue={financiero.codigoSeguridad} onChange={(e)=> handleChange(e.target.value, index, 'codigoSeguridad')} />
                        <input defaultValue={financiero.debito} onChange={(e)=> handleChange(e.target.value, index, 'debito')} />
                        <input defaultValue={financiero.estado} onChange={(e)=> handleChange(e.target.value, index, 'estado')} />
                        <input defaultValue={financiero.sucursal} onChange={(e)=> handleChange(e.target.value, index, 'sucursal')} />
                        <input defaultValue={financiero.tipoCTA} onChange={(e)=> handleChange(e.target.value, index, 'tipoCTA')} />
                        <input defaultValue={financiero.vto} onChange={(e)=> handleChange(e.target.value, index, 'vto')} />
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

  const handleChange = (value, index, field) => {
    updateInfo({ newValue: value, whichTable: 'observaciones', index, whichField: field })
  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} overflow-auto h-full px-6`}>
              {
                  data.map((observacion, index) => (
                    <div key={observacion.observacion_id}>
                      <h4>Observacion - {observacion.observacion_id}</h4>
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
