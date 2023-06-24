import { useState } from 'react'

export function InputPassword ({ placeholder, nameId, tabIndex, exportValue }) {
  const [isVisible, setIsVisible] = useState(false)
  const type = isVisible ? 'text' : 'password'
  const icon = isVisible ? 'fa-eye-slash' : 'fa-eye'

  const clickHandle = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className='input-container'>
      <input placeholder={placeholder} type={type} id={nameId} name={nameId} minLength='4' maxLength='40' className='inputs' tabIndex={tabIndex[0]} onChange={exportValue} />
      <label className='input-label' htmlFor={nameId}>
        {placeholder}
      </label>

      <label className='eye' onClick={clickHandle} tabIndex={tabIndex[1]}>
        <i className={`fa-solid ${icon}`} />
      </label>
    </div>
  )
}
