import { Option } from './Option'
import { useState } from 'react'

export function Select ({ nameId, tabIndex, values, initialValue, active }){
    const [selectValue, setSelectValue] = useState(initialValue)
    const classSelect = active ? 'select-curso active': 'select-curso'

    const selectivity = (event) => {
        const option = event.target
        setSelectValue(option.textContent)
    }

    const clickHandle = event => {
        selectivity(event)

        
    }

    return (
            <div className={classSelect} data-dropdown>
                <div className="select" tabIndex={tabIndex} id={nameId} data-dropdown-button>{selectValue}</div>
                <input name={nameId} value={selectValue} className='input-select' />

                <div className='options' >
                    {
                        values.map((value, index) => {
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