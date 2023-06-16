import { useState } from "react"

export function useGetSelectValue (){
    const [valorSelect, setValorSelect] = useState('')

    const getSelectValue = event => {
        setValorSelect(event.target.textContent)
    }

    return ([ getSelectValue, valorSelect ])
}