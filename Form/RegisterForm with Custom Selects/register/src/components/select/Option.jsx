export function Option ({ span, value, clickHandle }) {
  return (
    <>
      <p className='option' onClick={clickHandle}>
        {value}
      </p>
      { span && <span /> }
    </>
  )
}
