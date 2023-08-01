import { useState, useEffect } from "react"

export function Select ({options, changeValue, value}){
    const [isShowing, setIsShowing] = useState(false)

    const selectClass = isShowing ? "block" : "hidden"

    const clickHandle = ()=>{
        setIsShowing(!isShowing)
    }

    const optionHandle = (e)=>{
        setIsShowing(false)
        changeValue(e.target.textContent)
    }

    useEffect(() => {
        document.addEventListener('click', functinalitySelect)
    
        return () => {
          document.removeEventListener('click', functinalitySelect)
        }
    }, [])

    const functinalitySelect = (e) => {
        const isSelectButton = e.target.matches('[data-dropdown-button]')
    
        if (!isSelectButton) setIsShowing(false)
    }

    return (
        <div className=''>
            <button data-dropdown-button onClick={clickHandle} className=''>{value}</button>
            <ul className={`${selectClass}`}>
                {
                    options.map((option, index) => (
                        <li onClick={optionHandle} key={index} className=''>{option}</li>
                    ))
                }
            </ul>
        </div>
    )
}