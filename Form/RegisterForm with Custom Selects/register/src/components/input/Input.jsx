export function Input ({ placeholder, type, nameId, tabIndex, value, exportValue}) {
  return (
    <div className='input-container'>
      <input placeholder={placeholder} type={type} id={nameId} value={value} onChange={exportValue} name={nameId} minLength='4' maxLength='40' className='inputs' tabIndex={tabIndex} />
      <label className='input-label' htmlFor={nameId}>
        {placeholder}
      </label>
    </div>
  )
}
