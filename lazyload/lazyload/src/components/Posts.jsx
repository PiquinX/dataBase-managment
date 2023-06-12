import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { users } from '../constants'
import Post from './Post'

export const Posts = () => {
  const postsRef = useRef(null)
  const [contador, setContador] = useState(0)
  const observer = useRef(null)
  const [postsLeft, setPostsLeft] = useState(true)

  useEffect(() => {
    observer.current = new IntersectionObserver(loadMorePosts)
    if (contador === 0) loadPosts(3)
  }, [contador])

  const loadMorePosts = (entries) => {
    if (entries[0].isIntersecting) loadPosts(3)
  }

  const loadPosts = async (num) => {
    observer.current.disconnect()

    await setContador((prevContador) => prevContador + 1)

    const DFragment = document.createDocumentFragment()

    for (let i = 0; i < num; i++) {
      if (users[contador] !== undefined) {
        const newPost = document.createElement('section')
        newPost.className = 'post'

        ReactDOM.render(
          <Post
            userName={users[contador - 1].userName}
            photo={users[contador - 1].photo}
            userPhoto={users[contador - 1].userPhoto}
            description={users[contador - 1].desc}
          />,
          newPost
        )

        DFragment.appendChild(newPost)

        if (i === num - 1) observer.current.observe(newPost)
      } else if (postsLeft) {
        setPostsLeft(false)
        const noMore = <h3 id='no-more'>There isn't any other post</h3>
        DFragment.appendChild(noMore)
        break
      }
    }
    postsRef.current.appendChild(DFragment)
  }

  return <div className='posts' ref={postsRef} />
}

export default Posts
