export function post ({ userName, userPhoto, photo, description }) {
  const newPost = document.createElement('section')
  newPost.className = 'post'

  const postHeader = document.createElement('div')
  postHeader.className = 'post-header'

  const userImg = document.createElement('img')
  userImg.src = userPhoto
  postHeader.appendChild(userImg)

  const nombreDeUsuario = document.createElement('h3')
  nombreDeUsuario.textContent = userName
  postHeader.appendChild(nombreDeUsuario)

  newPost.appendChild(postHeader)

  const postContent = document.createElement('div')
  postContent.className = 'post-content'

  const postImg = document.createElement('img')
  postImg.src = photo
  postContent.appendChild(postImg)

  newPost.appendChild(postContent)

  const postBottom = document.createElement('div')
  postBottom.className = 'post-bottom'

  const postDesc = document.createElement('p')
  postDesc.textContent = description
  postBottom.appendChild(postDesc)

  const commentInput = document.createElement('input')
  commentInput.placeholder = 'Write a comment'
  commentInput.type = 'text'
  postBottom.appendChild(commentInput)

  newPost.appendChild(postBottom)

  return newPost
}
