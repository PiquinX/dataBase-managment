export const getUsers = async () => {
  try {
    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1c74998f&s=${search}`)
    const response = await res.json()
    const users = response.Search

    return users?.map(movie => ({
      id : '',
      estado: '',
      tipo: '',
      dni: '',
      nacimiento: '',
      apellido: '', 
      nombre: '',
      mail: '',
      cuil: '',
      movil: '',
      fijo: '',
      referente: '',
      ocupcacion: '',
      fechaDeAlta: '',
      firma: ''
    }))
  } catch (e) {
    throw new Error('No movies found')
  }
}
