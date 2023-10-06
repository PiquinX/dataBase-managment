export function filterUsers ({ users, search }) {
  // If the user doesn't exist it will return null.
  if (users) {
    // If the search is a number it will search number fields, if not it will search string fields.
    if (parseInt(search)) {
      return users.filter(user => {
        return (String(user.dni)?.startsWith(search) || String(user.cuil)?.startsWith(search))
      })
    } else {
      return users.filter(user => {
        return (user.apellido?.toUpperCase().startsWith(search.toUpperCase()) ||
            user.nombre?.toUpperCase().startsWith(search.toUpperCase()) ||
            user.ocupacion?.toUpperCase().startsWith(search.toUpperCase()))
      })
    }
  } else return null
}
