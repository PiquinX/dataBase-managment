import { Select } from './Select'
import { useEffect, useState } from 'react'
import { useFilters } from '../../Hooks/useFilters'

export function Filters () {
  // we recover the filter state and the function to change it
  const { filters, changeMaxPrice, changeMinPrice, changeCategory } = useFilters()

  // we apply the category value to the initial value of the state
  const [selectValue, setSelectValue] = useState(filters.category)

  // This function updates the both states the selectValue and the Filters.
  const handleChangeCategory = (value) => changeCategory(value)

  // This Effect updates the select value each time the category filter changes (this is especially for the clear filters function).
  useEffect(() => {
    setSelectValue(filters.category)
  }, [filters.category])

  // This function updates the minPrice filter only if it is lower than the maxPrice.
  const handleChangeMinPrice = event => {
    const newValue = event.target.value
    if (parseInt(newValue) < filters.maxPrice) changeMinPrice(newValue)
  }

  // This function updates the maxPrice filter only if it is higher than the minPrice.
  const handleChangeMaxPrice = event => {
    const newValue = event.target.value
    if (parseInt(newValue) > filters.minPrice) changeMaxPrice(newValue)
  }

  return (
    <>
      <div className='flex flex-col gap-4 py-6 pl-4 border-b sm:pl-10'>
        <div>
          <h4 className='pb-2 border-b-2 border-black w-max'>Category</h4>
        </div>
        <div className='flex justify-center'>
          <Select value={selectValue} changeValue={handleChangeCategory} options={['all', 'laptops', 'smartphones', 'fragrances', 'skincare', 'groceries']} />
        </div>
      </div>
      <div className='flex flex-col gap-4 py-6 pl-4 border-b sm:pl-10'>
        <div>
          <h4 className='pb-2 border-b-2 border-black w-max'>Price</h4>
        </div>
        <div className=''>
          <div className='flex px-2'>
            <p className='w-[130px] text-center'>min: {filters.minPrice}</p>
            <span> - </span>
            <p className='w-[130px] text-center'>max: {filters.maxPrice}</p>
          </div>

          <div className='flex gap-2 px-2'>
            <input onChange={handleChangeMinPrice} type='range' min={0} max={2000} value={filters.minPrice} />
            <input onChange={handleChangeMaxPrice} type='range' min={0} max={2000} value={filters.maxPrice} />
          </div>
        </div>
      </div>
    </>
  )
}
