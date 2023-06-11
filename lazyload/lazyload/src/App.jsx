import { React, useState, useEffect } from 'react'
import './App.css'
import { users } from './constants'
// import { Post } from './components/Publicacion'
import { createPostsCode } from './logic/createPostsCode'

function App () {
  const [whichPost, setWhichPost] = useState(0)
  const [postsLeft, setPostsLeft] = useState(true)

  useEffect(() => {
    loadPosts(4)
  }, [])

  const posts = document.querySelector('.posts-container')

  const loadMorePosts = entry => {
    if (entry[0].isIntersecting) loadPosts(4)
  }

  const observer = new IntersectionObserver(loadMorePosts)

  const loadPosts = async num => {
    // const request = await fetch('info.txt')
    // const content = await request.json()
    // const arr = content.content
    const DFragment = document.createDocumentFragment()
    for (let i = 0; i < num; i++) {
      if (users[whichPost] !== undefined) {
        const thisUser = users[whichPost]
        const newPost =
        // const newPost = <Post userName={thisUser.userName} photo={thisUser.photo} userPhoto={thisUser.userPhoto} description={thisUser.desc} />
        // const newPost = React.createElement(Post, { userName: thisUser.userName, photo: thisUser.photo, userPhoto: thisUser.userPhoto, description: thisUser.description })
        console.log(newPost)
        DFragment.innerHTML += newPost
        setWhichPost(wichPost => wichPost + 1)

        if (i === num - 1) observer.observe(newPost)
      } else if (postsLeft) {
        setPostsLeft(false)
        return
      }
    }
    posts.appendChild(DFragment)
  }

  return (
    <>
      <div className='posts-container'>
        {postsLeft === false && <p className='mensaje-SeguiMasGente'>Segui a mas genete para ver mas publicaciones</p>}
      </div>
    </>
  )
}

export default App
