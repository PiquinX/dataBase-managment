import { useState } from "react"

export function useSelectInteractivity (){
    const [select1, setSelect1] = useState(false)
    const [select2, setSelect2] = useState(false)
    const [select3, setSelect3] = useState(false)

    const changeSelectState = (selectNum) =>{
        if(selectNum === 1){
            setSelect1(prevSelect => !prevSelect)
            setSelect2(false)
            setSelect3(false)
        }else if(selectNum === 2){
            setSelect1(false)
            setSelect2(prevSelect => !prevSelect)
            setSelect3(false)
        }else if(selectNum === 3){
            setSelect1(false)
            setSelect2(false)
            setSelect3(prevSelect => !prevSelect)
        }else{
            setSelect1(false)
            setSelect2(false)
            setSelect3(false)
        }
    }

    return ({select1, select2, select3, changeSelectState})
}