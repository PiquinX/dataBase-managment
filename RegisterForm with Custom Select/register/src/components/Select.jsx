import { Option } from './Option'
import { useState } from 'react'

export function Select ({ nameId, tabIndex, values, initialValue }){
    const [selectValue, setSelectValue] = useState(initialValue)

    const selectivity = (event) => {
        const option = event.target;
        setSelectValue(option.value)
    }

    const clickHandle = event => {
        selectivity(event)
    }

    return (
            <div className='select-curso' data-dropdown>
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