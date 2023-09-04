export function filterUsers({ users, search }) {
    return users.filter(user => {
        return (user.apellido.startsWith(search))
    })
}