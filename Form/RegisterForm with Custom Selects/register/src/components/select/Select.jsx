import { Option } from './Option'
import { useState } from 'react'

export function Select ({ nameId, tabIndex, values, initialValue, active, returnValue }) {

  // el estado que maneja el valor del select.
  const [selectValue, setSelectValue] = useState(initialValue)
  
  // asigna clase si esta activo o no.
  const classSelect = active ? 'select-curso active' : 'select-curso'

  // Recupera el valor de la opcion clickeada y si lo asigna a el estado.
  const selectivity = (event) => {
    const option = event.target
    setSelectValue(option.textContent)
  }

  const clickHandle = event => {
    selectivity(event)

    if (returnValue !== undefined) returnValue(event)
  }

  return (
    <div className={classSelect} data-dropdown>
      <div className='select' tabIndex={tabIndex} id={nameId} data-dropdown-button>{selectValue}</div>
      <input name={nameId} value={selectValue} className='input-select' />

      <div className='options'>
        {
                        values.map((value, index) => {
                          // si es la ultima opcion no se imprime el span (es para estilos)
                          const span = index !== values.length - 1
                          return (
                            <Option key={index} value={value} clickHandle={clickHandle} span={span} />
                          )
                        })
                    }
      </div>
    </div>
  )
}
