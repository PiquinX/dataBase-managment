import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import { users } from '../constants'
import { Post } from './Post'

export const Posts = () => {
  const postsRef = useRef(null) // Crea una referencia mutable a un elemento en el DOM
  const [counter, setCounter] = useState(0) // Crea una variable de estado llamada 'counter' e inicialízala en 0
  const observer = useRef(null) // Crea una referencia mutable para el observador de intersección
  const [postsLeft, setPostsLeft] = useState(true)

  useEffect(() => {
    // Se ejecuta cuando el componente se monta en el DOM y cuando cambia el estado 'counter'
    observer.current = new IntersectionObserver(loadMorePosts) // Crea un nuevo observador de intersección y lo asigna a la referencia 'observer'
    if (counter === 0) loadPosts(3) // Carga 3 publicaciones iniciales al montar el componente

    return () => {
      // Se ejecuta cuando el componente se desmonta del DOM
      observer.current.disconnect() // Desconecta el observador de intersección
    }
  }, [])

  const loadMorePosts = (entries) => {
    // Función para cargar más publicaciones cuando se intersecta un elemento observado
    if (entries[0].isIntersecting) loadPosts(3) // Si el primer elemento intersectado está visible, carga 3 publicaciones más
  }

  const loadPosts = async (num) => {
    observer.current.disconnect()
    // Función para cargar publicaciones
    // const request = await fetch('info.txt') // Realiza una solicitud para obtener los datos de las publicaciones
    // const content = await request.json() // Convierte la respuesta en formato JSON
    // const arr = content.content // Obtiene el contenido de las publicaciones
    const DFragment = document.createDocumentFragment() // Crea un fragmento de documento para evitar múltiples re-renderizados
    let contadorMomentaneo = counter

    for (let i = 0; i < num; i++) {
      // Itera hasta el número de publicaciones deseado
      if (users[contadorMomentaneo] !== undefined) {
        // Si existe una publicación en el índice actual del counter
        const newPost = document.createElement('section')
        newPost.className = 'post'

        ReactDOM.createRoot(newPost).render(
          <Post
            userName={users[contadorMomentaneo].userName}
            photo={users[contadorMomentaneo].photo}
            userPhoto={users[contadorMomentaneo].userPhoto}
            description={users[contadorMomentaneo].desc}
          />
        )

        contadorMomentaneo++ // Actualiza el estado del counter incrementándolo en 1

        console.log(counter, contadorMomentaneo)
        DFragment.appendChild(newPost) // Agrega la publicación al fragmento de documento

        if (i === num - 1) observer.current.observe(newPost) // Si es la última publicación cargada, observa su intersección
      } else if (postsLeft) {
        // Si no hay más publicaciones disponibles y no se ha agregado el mensaje 'No hay más publicaciones'
        setPostsLeft(false)
        const noMore = <h3>Segui mas gente para poder ver las publicaciones</h3> // Crea el mensaje 'No hay más publicaciones'
        DFragment.appendChild(noMore) // Agrega el mensaje al fragmento de documento
        break // Sale del bucle
      }
    }
    setCounter(contadorMomentaneo)
    postsRef.current.appendChild(DFragment) // Agrega el fragmento de documento completo al elemento padre
  }

  return <div className='posts' ref={postsRef} /> // Renderiza un contenedor de publicaciones con la referencia 'postsRef'
}
