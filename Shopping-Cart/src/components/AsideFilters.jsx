import { Select } from './Select'
import { useId, useState } from 'react'
import { useFilters } from '../Hooks/useFilters'

export function AsideFilters () {
  // we recover the filter state and the function to change it
  const { filters, setFilters } = useFilters()

  // useId is to use it when you have a label and you want to have ids that dont repeat for the HTMLfor.
  const categoryFilterID = useId()

  // we apply the category value to the initial value of the state
  const [selectValue, setSelectValue] = useState(filters.category)

  // This function updates the both states the selectValue and the Filters.
  const handleChangeCategory = (value) => {
    setSelectValue(value)

    setFilters(prevFilters => ({
      ...prevFilters,
      category: value
    }))
  }

  return (
    <aside>
      <div>
        <Select value={selectValue} id={categoryFilterID} changeValue={handleChangeCategory} options={['all', 'laptops', 'smartphones', 'fragrances', 'skincare', 'groceries']} />
      </div>
    </aside>
  )
}
