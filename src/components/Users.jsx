import { User } from './User'
import { Campo } from './Campo'
import { useState } from 'react';

export function Users ({ users }) {
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState()
  const [scrollLeft, setScrollLeft] = useState()
  const [startY, setStartY] = useState()
  const [scrollTop, setScrollTop] = useState()

  const cursor = isDown ? 'cursor-grabbing' : 'cursor-pointer'

  const handleMouseDown = (e) => {
    const users = e.target.parentElement.parentElement.parentElement
    setIsDown(true)
    
    setStartX(e.pageX - users.offsetLeft)
    setScrollLeft(users.scrollLeft)

    setStartY(e.pageY - users.offsetTop)
    setScrollTop(users.scrollTop)
  }

  const handleMouseUp = (e) => {
    setIsDown(false)
  }

  const handleMouseMove = (e) => {
    const users = e.target.parentElement.parentElement.parentElement
    
    if(!isDown) return
    
    e.preventDefault()

    const x = e.pageX - users.offsetLeft
    const y = e.pageY - users.offsetTop

    const walkX = x - startX
    const walkY = y - startY

    users.scrollLeft = scrollLeft - walkX
    users.scrollTop = scrollTop - walkY
  };
  
  return (
    <>
      {
        users
          ? (
            <div
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className={`${cursor} grid w-full max-w-max max-h-[50%] sm:max-h-[80%] h-max overflow-auto`}
              >
              <div className='flex bg-[#172335] z-[900] sticky top-0' >
                <Campo styles={'w-[7em]'}>Falta subirlo</Campo>
                <div className='grid gap-0 duration-75 grid-cols-responsive '>
                  <Campo>ID</Campo>
                  <Campo>Estado</Campo>
                  <Campo>Tipo</Campo>
                  <Campo>N° Documento</Campo>
                  <Campo>F. de nacimiento</Campo>
                  <Campo>Apellido</Campo>
                  <Campo>Nombre</Campo>
                  <Campo>Correo</Campo>
                  <Campo>CUIL</Campo>
                  <Campo>Telefono movil</Campo>
                  <Campo>Telefono fijo</Campo>
                  <Campo>Referente</Campo>
                  <Campo>Ocupacion</Campo>
                  <Campo>F. de Alta</Campo>
                  <Campo>Firma</Campo>
                </div>
              </div>
              {
                users?.map(user => (
                  <User
                    key={user.id}
                    {...user}
                  />
                ))
              }
            </div>
            )
          : <h3 className='text-xl font-bold'>No se encontro ningun usuario</h3>
            }
    </>
  )
}
