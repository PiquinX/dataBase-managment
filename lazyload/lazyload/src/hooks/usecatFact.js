import { useState, useEffect } from "react";
import { getRandomFact } from "../logic/fact";

export const useCatFact = () => {
    const [fact, setFact] = useState()
  
    const refreshFact = () => {
      getRandomFact().then(newFact => setFact(newFact))
    }
  
    useEffect(refreshFact, [])
  
    return { fact, refreshFact }
}