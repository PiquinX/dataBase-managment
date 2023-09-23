import { useEffect, useRef } from "react"

export function DataUserSection ({ isDisplayed, updateInfo, data }) {
  // changing the value depending on the field and value
  const handleChange = (value, field) => {
    updateInfo({ newValue: value, whichField: field })
  }

  return (
    <>
      {
          data && isDisplayed &&
            <div className='flex flex-col h-full gap-4 px-6' >
              <h4 className="text-xl">Info general</h4>
              <div className='flex flex-col gap-3 text-black'>
                <InfoInputs value={data.nombre} placeHolder={'Nombre'} onChange={(e)=> handleChange(e.target.value, 'nombre')} />
                <InfoInputs value={data.apellido} placeHolder={'Apellido'} onChange={(e)=> handleChange(e.target.value, 'apellido')} />
                <InfoInputs value={data.estado} placeHolder={'Estado'} onChange={(e)=> handleChange(e.target.value, 'estado')} />
                <InfoInputs value={data.nacimiento} placeHolder={'Nacimiento'} onChange={(e)=> handleChange(e.target.value, 'nacimiento')} />
                <InfoInputs value={data.dni} placeHolder={'DNI'} onChange={(e)=> handleChange(e.target.value, 'dni')} type='number' />
                <InfoInputs value={data.tipo} placeHolder={'Tipo'} onChange={(e)=> handleChange(e.target.value, 'tipo')} />
                <InfoInputs value={data.mail} placeHolder={'Mail'} onChange={(e)=> handleChange(e.target.value, 'mail')} type='email' />
                <InfoInputs value={data.cuil} placeHolder={'Cuil/Cuit'} onChange={(e)=> handleChange(e.target.value, 'cuil')} type='number' />
                <InfoInputs value={data.movil} placeHolder={'Movil'} onChange={(e)=> handleChange(e.target.value, 'movil')} />
                <InfoInputs value={data.fijo} placeHolder={'Fijo'} onChange={(e)=> handleChange(e.target.value, 'fijo')} />
                <InfoInputs value={data.referente} placeHolder={'Referente'} onChange={(e)=> handleChange(e.target.value, 'referente')} />
                <InfoInputs value={data.ocupcacion} placeHolder={'Ocupacion'} onChange={(e)=> handleChange(e.target.value, 'ocupcacion')} />
                <InfoInputs value={data.fechaDeAlta} placeHolder={'Fecha de alta'} onChange={(e)=> handleChange(e.target.value, 'fechaDeAlta')} />
                <InfoInputs value={data.firma} placeHolder={'Firma'} onChange={(e)=> handleChange(e.target.value, 'firma')} />
              </div>
            </div>
        }
    </>
  )
}

export function DataAdressSection ({ isDisplayed, updateInfo, data, addInfo, removeInfo }) {
  // changing the value depending on the field and value
  const handleChange = (value, index, field) => {
    updateInfo({ newValue: value, whichTable: 'direcciones', index, whichField: field })
  }

  const handleClick = ()=> addInfo('direcciones')

  const handleRemove = (index) => removeInfo('direcciones', index)

  return (
    <>
      {
          data && isDisplayed && 
          <div className='h-full px-6'>
              <div className="flex flex-col gap-5">
                {
                  data.map((direccion, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl">Direccion {index + 1}</h4>
                        <DeleteButton handleClick={()=> handleRemove(index)}>
                          Eliminar
                        </DeleteButton>
                      </div>
                      <div className='flex flex-col gap-3 text-black'>
                        <InfoInputs value={direccion.calle} placeHolder={'Calle'} onChange={(e)=> handleChange(e.target.value, index, 'calle')} />
                        <InfoInputs value={direccion.numero} placeHolder={'Numero'} onChange={(e)=> handleChange(e.target.value, index, 'numero')} />
                        <InfoInputs value={direccion.piso} placeHolder={'Piso'} onChange={(e)=> handleChange(e.target.value, index, 'piso')} />
                        <InfoInputs value={direccion.localidad} placeHolder={'Localidad'} onChange={(e)=> handleChange(e.target.value, index, 'localidad')} />
                        <InfoInputs value={direccion.codigoPostal} placeHolder={'Codigo Postal'} onChange={(e)=> handleChange(e.target.value, index, 'codigoPostal')} />
                        <InfoInputs value={direccion.provincia} placeHolder={'Provincia'} onChange={(e)=> handleChange(e.target.value, index, 'provincia')} />
                      </div>
                    </div>
                  ))
                }
              </div>
              <Button handleClick={handleClick} >
                Añadir dirección
              </Button>
            </div>
        }
    </>
  )
}

export function DataDonationsSection ({ isDisplayed, updateInfo, data, addInfo, removeInfo }) {
  // changing the value depending on the field and value
  const handleChange = (value, index, field) => {
    updateInfo({ newValue: value, whichTable: 'donaciones', index, whichField: field })
  }

  const handleClick = ()=> addInfo('donaciones')

  const handleRemove = (index) => removeInfo('donaciones', index)

  return (
    <>
      {
        data && isDisplayed && 
        <div className='h-full px-6'>
          <div className="flex flex-col gap-5">
            {
              data.map((donacion, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl">Donacion {index + 1}</h4>
                    <DeleteButton handleClick={()=> handleRemove(index)}>
                      Eliminar
                    </DeleteButton>
                  </div>
                  <div className='flex flex-col gap-3 text-black'>
                    <InfoInputs value={`${donacion.cantidad}`} placeHolder={'Cantidad'} onChange={(e)=> handleChange(e.target.value, index, 'cantidad')} />
                    <InfoInputs value={donacion.estado_donacion} placeHolder={'Estado'} onChange={(e)=> handleChange(e.target.value, index, 'estado_donacion')} />
                    <InfoInputs value={donacion.fecha} placeHolder={'Fecha'} onChange={(e)=> handleChange(e.target.value, index, 'fecha')} />
                    <InfoInputs value={donacion.metodoDePago} placeHolder={'Metodo de pago'} onChange={(e)=> handleChange(e.target.value, index, 'metodoDePago')} />
                    <InfoInputs value={donacion.tipo} placeHolder={'Tipo'} onChange={(e)=> handleChange(e.target.value, index, 'tipo')} />
                  </div>
                </div>
              ))
            }
          </div>
          <Button handleClick={handleClick} >
            Añadir donación
          </Button>
        </div>
      }
    </>
  )
}

export function DataFinancialSection ({ isDisplayed, updateInfo, data, addInfo, removeInfo }) {
  // changing the value depending on the field and value
  const handleChange = (value, index, field) => {
    updateInfo({ newValue: value, whichTable: 'financieros', index, whichField: field })
  }

  const handleClick = ()=> addInfo('financieros')

  const handleRemove = (index) => removeInfo('financieros', index)

  return (
    <>
      {
          data && isDisplayed && 
          <div className='h-full px-6'>
              <div className="flex flex-col gap-5">
                {
                  data.map((financiero, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl">Financiero {index + 1}</h4>
                        <DeleteButton handleClick={()=> handleRemove(index)}>
                          Eliminar
                        </DeleteButton>
                      </div>
                      <div className='flex flex-col gap-3 text-black'>
                        <InfoInputs value={financiero.banco} placeHolder={'Banco'} onChange={(e)=> handleChange(e.target.value, index, 'banco')} />
                        <InfoInputs value={financiero.codigoSeguridad} placeHolder={'Codigo de seguridad'} onChange={(e)=> handleChange(e.target.value, index, 'codigoSeguridad')} />
                        <InfoInputs value={financiero.debito} placeHolder={'Debito'} onChange={(e)=> handleChange(e.target.value, index, 'debito')} />
                        <InfoInputs value={financiero.estado_financiero} placeHolder={'Estado'} onChange={(e)=> handleChange(e.target.value, index, 'estado_financiero')} />
                        <InfoInputs value={financiero.sucursal} placeHolder={'Sucursal'} onChange={(e)=> handleChange(e.target.value, index, 'sucursal')} />
                        <InfoInputs value={financiero.tipoCTA} placeHolder={'Tipo CTA'} onChange={(e)=> handleChange(e.target.value, index, 'tipoCTA')} />
                        <InfoInputs value={financiero.vto} placeHolder={'VTO'} onChange={(e)=> handleChange(e.target.value, index, 'vto')} />
                      </div>
                    </div>
                  ))
                }
              </div>
              <Button handleClick={handleClick} >
                Añadir Financiero
              </Button>
            </div>
        }
    </>
  )
}

export function DataObservationsSection ({ isDisplayed, updateInfo, data, addInfo, removeInfo }) {
  // changing the value depending on the field and value
  const handleChange = (value, index, field) => {
    updateInfo({ newValue: value, whichTable: 'observaciones', index, whichField: field })
  }
  
  const handleClick = ()=> addInfo('observaciones')

  const handleRemove = (index) => removeInfo('observaciones', index)

  return (
    <>
      {
          data && isDisplayed && 
          <div className='h-full px-6'>
              <div className="flex flex-col gap-5">
                {
                  data.map((observacion, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl">Observacion {index + 1}</h4>
                        <DeleteButton handleClick={()=> handleRemove(index)}>
                          Eliminar
                        </DeleteButton>
                      </div>
                      <div className='flex flex-col gap-3 text-black'>
                        <textarea 
                          value={observacion.observacion} 
                          onChange={(e)=> handleChange(e.target.value, index, 'observacion')} 
                          className='w-64 resize-none' />
                      </div>
                    </div>
                  ))
                }
              </div>
              <Button handleClick={handleClick} >
                Añadir Observación
              </Button>
            </div>
        }
    </>
  )
}


function InfoInputs({ placeHolder, value = '', onChange }){
  return(
    <div className="relative w-64 h-10" >
      <label className="absolute bg-[#375786] text-white left-2 -top-3 px-1">{placeHolder}</label>
      <input value={value} onChange={onChange} className="w-full h-full pl-2 font-bold text-white bg-transparent border-2 rounded outline-none" />
    </div>
  )
}

function Button({ children, handleClick }){
  return(
    <div className="w-full py-2">
      <button onClick={handleClick} className="w-full py-2 font-bold text-white border-2 border-green-500 rounded hover:bg-green-500">{children}</button>
    </div>
  )
}

function DeleteButton({ children, handleClick }){
  return(
    <>
      <button onClick={handleClick} className="px-2 py-1 text-sm font-bold text-white border-2 border-red-500 rounded hover:bg-red-500">{children}</button>
    </>
  )
}