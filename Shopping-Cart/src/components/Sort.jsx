import { useSort } from '../Hooks/useSort'
import { Select } from './Select'
import { useState } from 'react'
import { sortOptionsArray } from '../services/sortOptions'

export function Sort () {
  const { sort, setSort } = useSort()
  // we apply the sort value to the initial value of the state
  const [selectValue, setSelectValue] = useState(sort)

  // This function updates the both states the selectValue and the sort.
  const handleChangeCategory = (value) => {
    setSelectValue(value)
    setSort(value)
  }

  return (
    <>
      <div className='z-20 my-6 w-max'>
        <Select
          value={selectValue}
          changeValue={handleChangeCategory}
          options={sortOptionsArray}
        />
      </div>
    </>
  )
}
