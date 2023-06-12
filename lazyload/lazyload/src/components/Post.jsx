export function Post ({ userName, userPhoto, photo, description }) {
  return (
    <>
      <div className='post-header'>
        <a className='post-userLink'>
          <img className='post-fotoDePerfil' src={userPhoto} />
          <h3 className='post-username'>{userName}</h3>
        </a>
      </div>
      <div className='post-content'>
        <img src={photo} />
      </div>
      <div className='post-bottom'>
        <p className='post-description'>{description}</p>
        <input className='post-comment' placeholder='Escribe un comentario ...' type='text' />
      </div>
    </>
  )
}
