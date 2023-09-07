import { createContext, useState } from 'react'
import { getUsers } from '../services/getUsers'

// We create the context, this one is used to be called with the useContext().
export const UsersContext = createContext()

// We create a provider, this one is used to wrap in the things that we want to be using the context.
export function UsersProvider ({ children }) {
  // const [users, setUsers] = useState(getUsers())

  // const refreshUsers = () => setUsers(getUsers())

  const users = [{
    id : '14',
      estado: 'Activo',
      tipo: 'Socio',
      dni: '46491945',
      nacimiento: '15/03/1990',
      apellido: 'Albertini', 
      nombre: 'Ricardo',
      mail: 'santiagopiquinvillegas@sagradocorazon.edu.ar',
      cuil: '20-46491945-7',
      movil: '11 4244 5252',
      fijo: '+ 4156 5436',
      referente: 'REFERENTE',
      ocupcacion: 'Psicologo',
      fechaDeAlta: '20/10/21',
      firma: 'FIRMA'
  },{
    id : '14',
      estado: 'Activo',
      tipo: 'Socio',
      dni: '46491945',
      nacimiento: '15/03/1990',
      apellido: 'Messi', 
      nombre: 'Ricardo',
      mail: 'santiagopiquinvillegas@sagradocorazon.edu.ar',
      cuil: '20-46491945-7',
      movil: '11 4244 5252',
      fijo: '+ 4156 5436',
      referente: 'REFERENTE',
      ocupcacion: 'Psicologo',
      fechaDeAlta: '20/10/21',
      firma: 'FIRMA'
  },{
    id : '14',
      estado: 'Activo',
      tipo: 'Socio',
      dni: '46491945',
      nacimiento: '15/03/1990',
      apellido: 'Jasentiuk', 
      nombre: 'Ricardo',
      mail: 'santiagopiquinvillegas@sagradocorazon.edu.ar',
      cuil: '20-46491945-7',
      movil: '11 4244 5252',
      fijo: '+ 4156 5436',
      referente: 'REFERENTE',
      ocupcacion: 'Psicologo',
      fechaDeAlta: '20/10/21',
      firma: 'FIRMA'
  },{
    id : '14',
      estado: 'Activo',
      tipo: 'Socio',
      dni: '46491945',
      nacimiento: '15/03/1990',
      apellido: 'Distefano', 
      nombre: 'Ricardo',
      mail: 'santiagopiquinvillegas@sagradocorazon.edu.ar',
      cuil: '20-46491945-7',
      movil: '11 4244 5252',
      fijo: '+ 4156 5436',
      referente: 'REFERENTE',
      ocupcacion: 'Psicologo',
      fechaDeAlta: '20/10/21',
      firma: 'FIRMA' 
  }]

  return (
    <UsersContext.Provider value={{
      users
    }}
    >
      {children}
    </UsersContext.Provider>
  )
}
