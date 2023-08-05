import { useEffect, useState } from 'react'
import { useGetSelectValue } from './useGetSelectValue'
import { allValues } from '../../constants'

export function useUpdateConditionalSelect () {
  // useGetSelectValue hook tiene el valor del select y la funcion para actualizarlo. Esto para poder tener el control de sus valores.
  const [getSelectValue1, selectValue1] = useGetSelectValue()
  const [getSelectValue2, selectValue2] = useGetSelectValue()

  // estado que contiene las opciones de el tercer select.
  const [selectOptions3, setSelectOptions3] = useState([])

  // efecto que cada vez que se actualiza un select se ejecuta para asignarle un valor al select3(condicional) segun los valores de los 2 primeros.
  useEffect(() => {
    const anoNum = parseInt(selectValue1)

    if (anoNum <= 3) {
      if (selectValue2 === 'Tarde') {
        setSelectOptions3(allValues.PCTarde)
      } else if (selectValue2 === 'Mañana') {
        setSelectOptions3(allValues.PCMan)
      }
    }

    if (anoNum > 3 && anoNum <= 6) {
      if (selectValue2 === 'Tarde') {
        setSelectOptions3(allValues.SCTarde)
      } else if (selectValue2 === 'Mañana') {
        setSelectOptions3(allValues.SCMan)
      }
    }

    if (anoNum === 7) setSelectOptions3(allValues.Septimo)
  }, [selectValue1, selectValue2])

  return ({ selectValue1, getSelectValue1, getSelectValue2, selectOptions3 })
}
