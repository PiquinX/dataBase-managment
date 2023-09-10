import { useState, useEffect } from "react"
import { getFact } from "../services/getFact"


export function useCatFact (){
    const [fact, setFact] = useState('')
    
    const refreshFact = () => {
      // fetch de datos
      getFact().then(newFact => setFact(newFact))
    }

    console.log(fact)
    
    useEffect(refreshFact,[])


  return { fact, refreshFact }
}