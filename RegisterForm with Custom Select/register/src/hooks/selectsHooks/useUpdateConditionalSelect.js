import { useEffect, useState } from "react"
import { useGetSelectValue } from "./useGetSelectValue"
import { allValues } from '../../constants'

export function useUpdateConditionalSelect(){
    const [ getSelectValue1, selectValue1 ] = useGetSelectValue()
    const [ getSelectValue2, selectValue2 ] = useGetSelectValue()
    
    const [selectOptions3, setSelectOptions3] = useState([])

    useEffect(()=>{
    const anoNum = parseInt(selectValue1)

    if(anoNum <= 3){
        if(selectValue2 === "Tarde") {
            setSelectOptions3(allValues.PCTarde)
        }else if(selectValue2 === "Mañana") {
            setSelectOptions3(allValues.PCMan)
        }
    }

    if(anoNum > 3 && anoNum <= 6){
        if(selectValue2 === "Tarde") {
            setSelectOptions3(allValues.SCTarde)
        }else if(selectValue2 === "Mañana"){
            setSelectOptions3(allValues.SCMan)
        }
    }


        if(anoNum === 7) setSelectOptions3(allValues.Septimo)

        }, [selectValue1, selectValue2])

    return ({ selectValue1, getSelectValue1, getSelectValue2, selectOptions3 })
}