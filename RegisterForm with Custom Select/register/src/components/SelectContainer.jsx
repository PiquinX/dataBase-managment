import { Select } from './Select'
import { allValues } from '../constants'
import { useState, useEffect } from 'react'

export function SelectContainer ({ tabIndex }){
    const [select1, setSelect1] = useState(false)
    const [select2, setSelect2] = useState(false)
    const [select3, setSelect3] = useState(false)

    useEffect(() => {
        document.addEventListener("click", e => {
          const isSelectButton  = e.target.matches("[data-dropdown-button]")
      
          let currentDropdown
          if(isSelectButton){
            currentDropdown = e.target.closest("[data-dropdown]").firstElementChild.id
            if(currentDropdown){
                
            }
          }
        })

        return ()=>{
            document.removeEventListener("click", e=>{})
        }
      })

    return (
        <div className='curso-container'>
            <h4>Seleccionar Curso</h4>
            <div className="select-container">
                <Select nameId='ano' tabIndex={tabIndex[0]} values={allValues.ano} initialValue='Año' />
                <Select nameId='turno' tabIndex={tabIndex[1]} values={allValues.turno} initialValue='Turno' />
            </div>
        </div>
    )
}