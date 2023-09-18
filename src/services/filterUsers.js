export function filterUsers ({ users, search }) {
  if(users) return users.filter(user => {
    return (user.apellido.toUpperCase().startsWith(search.toUpperCase()))
  })
  else return null
}
