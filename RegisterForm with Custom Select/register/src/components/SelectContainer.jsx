import { Select } from './Select'
import { allValues } from '../constants'
import { useState, useEffect } from 'react'

export function SelectContainer ({ tabIndex }){
    const [select1, setSelect1] = useState(false)
    const [select2, setSelect2] = useState(false)
    const [select3, setSelect3] = useState(false)

    useEffect(() => {
        document.addEventListener("click", functinalitySelect)

        return ()=>{
          document.removeEventListener("click", functinalitySelect)
        }
      }, [])

      const functinalitySelect = (e) =>{
        const isSelectButton  = e.target.matches("[data-dropdown-button]")
      
        let currentDropdown
        if(isSelectButton){
          currentDropdown = e.target.closest("[data-dropdown]").firstElementChild.id

          if(currentDropdown === 'ano') {
            setSelect1(prevSelect => !prevSelect)
            setSelect2(false)
            setSelect3(false)
          }
          if(currentDropdown === 'turno'){
            setSelect1(false)
            setSelect2(prevSelect => !prevSelect)
            setSelect3(false)
          } 
          if(currentDropdown === 'modalidad'){
            setSelect1(false)
            setSelect2(false)
            setSelect3(prevSelect => !prevSelect)
          }
        }else{
          setSelect1(false)
          setSelect2(false)
          setSelect3(false)
        }
      }

    return (
        <div className='curso-container'>
            <h4>Seleccionar Curso</h4>
            <div className="select-container">
                <Select nameId='ano' tabIndex={tabIndex[0]} values={allValues.ano} initialValue='Año' active={select1} />
                <Select nameId='turno' tabIndex={tabIndex[1]} values={allValues.turno} initialValue='Turno' active={select2} />
                <Select nameId='modalidad' tabIndex={tabIndex[2]} values={allValues.PCMan} initialValue='Modalidad' active={select3} />
            </div>
        </div>
    )
}