import { useState, useEffect } from "react"
import { getCocktail } from '../services/getCocktail'

export function useCocktail ({ fact }){
    const [cocktail, setCocktail] = useState()
  
  useEffect(() => {
    if (!fact) return 

    getCocktail({ fact }).then(newCocktail => setCocktail(newCocktail))

  },[fact])

  return { cocktail }
}