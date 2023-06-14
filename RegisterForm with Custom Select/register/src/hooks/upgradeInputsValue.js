import { useState } from "react"

export function useValueInput1 (){
    const [valorInput1, setValorInput1] = useState('')

    const updateInputValue1 = event => {
        console.log(event)
        setValorInput1(event.target.value)
    }

    return ({updateInputValue1, valorInput1})
}

export function useValueInput2 (){
    const [valorInput2, setValorInput2] = useState('')

    const updateInputValue2 = event => {
        console.log(event)
        setValorInput2(event.target.value)
    }

    return ({updateInputValue2, valorInput2})
}