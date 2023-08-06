export function User ({ id, estado, tipo, dni, nacimiento, apellido, nombre, mail, cuil, movil, fijo, referente, ocupcacion, fechaDeAlta, firma }) {
  return (
    <li className='grid duration-75 grid-cols-responsive'>
      <div className="bg-[#172335] grid p-1 cursor-pointer border place-items-center hover:bg-[#3f577c] group"><i className="grid w-full h-full rounded-lg place-items-center group-hover:text-green-400 fa-regular fa-pen-to-square"></i></div>
      <Campo styles='col-start-2'>{id}</Campo>
      <Campo>{estado}</Campo>
      <Campo>{tipo}</Campo>
      <Campo>{dni}</Campo>
      <Campo>{nacimiento}</Campo>
      <Campo>{apellido}</Campo>
      <Campo>{nombre}</Campo>
      <Campo>{mail}</Campo>
      <Campo>{cuil}</Campo>
      <Campo>{movil}</Campo>
      <Campo>{fijo}</Campo>
      <Campo>{referente}</Campo>
      <Campo>{ocupcacion}</Campo>
      <Campo>{fechaDeAlta}</Campo>
      <Campo>{firma}</Campo>
    </li>
  )
}

function Campo ({ children, styles }) {
  return (
    <p className={`${styles} bg-[#172335] cursor-default w-full px-2 py-1 border max-h-9 overflow-hidden duration-75 hover:min-w-max hover:relative hover:z-30 hover:bg-[#3f577c]`}>{children}</p>
  )
}
