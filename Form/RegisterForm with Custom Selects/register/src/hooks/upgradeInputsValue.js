import { useState } from 'react'

export function useValueInput () {
  const [valorInput, setValorInput] = useState('')

  const updateInputValue = event => {
    setValorInput(event.target.value)
  }

  return ([updateInputValue, valorInput])
}

// export function useValueInput2 (){
//     const [valorInput2, setValorInput2] = useState('')

//     const updateInputValue2 = event => {
//         setValorInput2(event.target.value)
//     }

//     return ({updateInputValue2, valorInput2})
// }
