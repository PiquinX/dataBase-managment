import { Select } from './Select'
import { allValues } from '../../constants'
import { useSelects } from '../../hooks/selectsHooks/useSelects'
import { useUpdateConditionalSelect } from '../../hooks/selectsHooks/useUpdateConditionalSelect'

export function SelectContainer ({ tabIndex }) {
  const { select1, select2, select3 } = useSelects()
  const { selectValue1, getSelectValue1, getSelectValue2, selectOptions3 } = useUpdateConditionalSelect()

  return (
    <div className='curso-container'>
      <h4>Seleccionar Curso</h4>
      <div className='select-container'>
        <Select nameId='ano' tabIndex={tabIndex[0]} values={allValues.ano} initialValue='Año' active={select1} returnValue={getSelectValue1} />
        {
                 selectValue1 !== '7°' && <Select nameId='turno' tabIndex={tabIndex[1]} values={allValues.turno} initialValue='Turno' active={select2} returnValue={getSelectValue2} />
                }
        <Select nameId='modalidad' tabIndex={tabIndex[2]} values={selectOptions3} initialValue='Modalidad' active={select3} />
      </div>
    </div>
  )
}
