export const createPostsCode = ({ userName, desc, photo, userPhoto }) => {
  const section = document.createElement('section')

  const postHeader = document.createElement('div')
  const postContent = document.createElement('div')
  const postBottom = document.createElement('div')

  const nombreDeUsuario = document.createElement('h3')
  nombreDeUsuario.textContent = userName

  const fotoDePerfil = document.createElement('img')
  fotoDePerfil.setAttribute('src', userPhoto)

  postHeader.appendChild(nombreDeUsuario)
  postHeader.appendChild(fotoDePerfil)

  const foto = document.createElement('img')
  foto.setAttribute('src', photo)

  postContent.appendChild(foto)

  const description = document.createElement('p')
  description.textContent = desc

  const comentario = document.createElement('input')
  comentario.setAttribute('type', 'text')

  postBottom.appendChild(description)
  postBottom.appendChild(comentario)

  section.appendChild(postHeader)
  section.appendChild(postContent)
  section.appendChild(postBottom)
}
