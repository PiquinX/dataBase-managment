export function filterUsers ({ users, search }) {
  if(users){ 
    if(parseInt(search)){
      return users.filter(user => {
        return (String(user.dni)?.startsWith(search) || String(user.cuil)?.startsWith(search))
      })
    }else{
      return users.filter(user => {
        return (user.apellido?.toUpperCase().startsWith(search.toUpperCase()) 
            || user.nombre?.toUpperCase().startsWith(search.toUpperCase())
            || user.ocupacion?.toUpperCase().startsWith(search.toUpperCase()))
      })
    }
  }else return null
}
