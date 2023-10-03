import { useEffect, useRef } from "react"
import { DeleteModal } from '../DeleteModal'

export function DataUserSection ({ isDisplayed, updateInfo, data }) {
  // this ref contains the full name of the user in case, the we change it.
  const userName = useRef(`${data.nombre} ${data.apellido}`)

  // changing the value depending on the field and value
  const handleChange = (value, field) => {
    updateInfo({ newValue: value, whichField: field })
  }

  return (
    <>
      {
          data && isDisplayed &&
            <div className='flex flex-col h-full gap-4 px-6' >
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

export function DataAdressSection ({ isDisplayed, updateInfo, data, addInfo, removeInfo }) {
  const direccionesCompletas = useRef([])

  useEffect(()=>{
    direccionesCompletas.current = []
    for(let i = 0; i < data.length; i++){
      const adress = data[i].calle && data[i].numero 
      ? `${data[i].calle} ${data[i].numero}` 
      : 'Sin direccion'
      
      direccionesCompletas.current.push(adress)
    }
  },[data.length])
  


  // changing the value depending on the field and value
  const handleChange = (value, index, field) => {
    updateInfo({ newValue: value, whichTable: 'direcciones', index, whichField: field })
  }

  const handleClick = ()=> addInfo('direcciones')

  const handleRemove = (value)=> removeInfo('direcciones', value)

  return (
    <>
      {
        data && isDisplayed && 
          <div className='h-full px-6'>
            <div className="flex flex-col gap-5">
              {
                data.map((direccion, index) => (
                  <div key={direccion.id ? direccion.id : index} className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl">{data[index].calle && data[index].numero ? direccionesCompletas.current[index] : 'Sin direccion'} - {index + 1}</h4>
                      <DeleteModal deleteInfo={()=> handleRemove(index)}>
                        Eliminar
                      </DeleteModal>
                    </div>
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
              }
              <Button handleClick={handleClick} >
                Añadir dirección
              </Button>
            </div>
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

  const handleRemove = (value)=> removeInfo('donaciones', value)

  return (
    <>
      {
        data && isDisplayed && 
        <div className='h-full px-6'>
          <div className="flex flex-col gap-5">
            {
                data.map((donacion, index) => (
                  <div key={donacion.id} className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl">Donacion - {index + 1}</h4>
                      <DeleteModal deleteInfo={()=> handleRemove(index)}>
                        Eliminar
                      </DeleteModal>
                    </div>
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
  
  const handleRemove = (value)=> removeInfo('financieros', value)

  return (
    <>
      {
        data && isDisplayed && 
        <div className='h-full px-6'>
          <div className="flex flex-col gap-5">
            {
              data.map((financiero, index) => (
                <div key={financiero.id} className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl">Financiero - {index + 1}</h4>
                    <DeleteModal deleteInfo={()=> handleRemove(index)}>
                      Eliminar
                    </DeleteModal>
                  </div>
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

  const handleRemove = (value)=> removeInfo('observaciones', value)

  return (
    <>
      {
        data && isDisplayed && 
        <div className='h-full px-6'>
          <div className="flex flex-col gap-5">
            {
              data.map((observacion, index) => (
                <div key={observacion.id} className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl">Observacion - {index + 1}</h4>
                    <DeleteModal deleteInfo={()=> handleRemove(index)}>
                      Eliminar
                    </DeleteModal>
                  </div>
                  <div className='flex flex-col gap-3 text-black'>
                    <textarea 
                      defaultValue={observacion.observacion} 
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


function InfoInputs({ placeHolder, defaultValue, onChange }){
  return(
    <div className="relative w-64 h-10" >
      <label className="absolute bg-[#375786] text-white left-2 -top-3 px-1">{placeHolder}</label>
      <input defaultValue={defaultValue} onChange={onChange} className="w-full h-full pl-2 font-bold text-white bg-transparent border-2 rounded outline-none" />
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