export function DataUserSection ({ isDisplayed, updateInfo, data }) {
  const dataStyle = isDisplayed ? 'block' : 'hidden'

  const handleChange = (e) => {

  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} overflow-auto h-full px-6`}>
              <h4>{data.apellido} {data.nombre} - {data.id}</h4>
              <div className='flex flex-col gap-3 text-black'>
                <input defaultValue={data.nombre} />
                <input defaultValue={data.apellido} />
                <input defaultValue={data.estado} />
                <input defaultValue={data.nacimiento} />
                <input defaultValue={data.dni} type='number' />
                <input defaultValue={data.tipo} />
                <input defaultValue={data.mail} type='email' />
                <input defaultValue={data.cuil} type='number' />
                <input defaultValue={data.movil} />
                <input defaultValue={data.fijo} />
                <input defaultValue={data.referente} />
                <input defaultValue={data.ocupcacion} />
                <input defaultValue={data.fechaDeAlta} />
                <input defaultValue={data.firma} />
              </div>
            </div>
        }
    </>
  )
}

export function DataAdressSection ({ isDisplayed, updateInfo, data }) {
  const dataStyle = isDisplayed ? 'block' : 'hidden'

  const handleChange = (e) => {

  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} overflow-auto h-full px-6`}>
              {
              data[0].numero === null
                ? <h4>Este usuario no tiene direcciones</h4>
                : (
                    data.map(direccion => (
                      <div key={direccion.direccion_id}>
                        <h4>{direccion.calle} {direccion.numero} - id: {direccion.direccion_id}</h4>
                        <div className='flex flex-col gap-3 text-black'>
                          <input defaultValue={direccion.calle} />
                          <input defaultValue={direccion.numero} />
                          <input defaultValue={direccion.piso} />
                          <input defaultValue={direccion.localidad} />
                          <input defaultValue={direccion.codigoPostal} />
                          <input defaultValue={direccion.provincia} />
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

  const handleChange = (e) => {

  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} overflow-auto h-full px-6`}>
              {
                  data.map(donacion => (
                    <div key={donacion.donacion_id}>
                      <h4>Donacion - {donacion.donacion_id}</h4>
                      <div className='flex flex-col gap-3 text-black'>
                        <input defaultValue={`$ ${donacion.cantidad}`} />
                        <input defaultValue={donacion.estado} />
                        <input defaultValue={donacion.fecha} />
                        <input defaultValue={donacion.metodoDePago} />
                        <input defaultValue={donacion.tipo} />
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

  const handleChange = (e) => {

  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} overflow-auto h-full px-6`}>
              {
                  data.map(financiero => (
                    <div key={financiero.financiero_id}>
                      <h4>Financiero - {financiero.financiero_id}</h4>
                      <div className='flex flex-col gap-3 text-black'>
                        <input defaultValue={financiero.banco} />
                        <input defaultValue={financiero.codigoSeguridad} />
                        <input defaultValue={financiero.debito} />
                        <input defaultValue={financiero.estado} />
                        <input defaultValue={financiero.sucursal} />
                        <input defaultValue={financiero.tipoCTA} />
                        <input defaultValue={financiero.vto} />
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

  const handleChange = (e) => {

  }

  return (
    <>
      {
          data &&
            <div className={`${dataStyle} overflow-auto h-full px-6`}>
              {
                  data.map(observacion => (
                    <div key={observacion.observacion_id}>
                      <h4>Financiero - {observacion.observacion_id}</h4>
                      <div className='flex flex-col gap-3 text-black'>
                        <textarea defaultValue={observacion.observacion} className='resize-none' />
                      </div>
                    </div>
                  ))
            }
            </div>
        }
    </>
  )
}
