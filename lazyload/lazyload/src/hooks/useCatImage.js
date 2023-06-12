import { useState, useEffect } from "react";

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

// La diferencia  entre un custom hook y una funcion normal es que el custom hook puede llamar hooks en cambio la funcion no.
export const useCatImg = ({ fact }) => {
    const [finalResult, setFinalResult] = useState()
  
    useEffect(() => {
      if (!fact) return
  
      const firstThreeWords = fact.split(' ', 3).join(' ')
  
      fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
          const { url } = response
          setFinalResult(`${CAT_PREFIX_IMAGE_URL}${url}`)
        })
    }, [fact])
  
    return { finalResult }
  }