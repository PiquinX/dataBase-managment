import { Select } from "./Select"
import { useEffect, useState } from 'react'
import { useFilters } from '../../Hooks/useFilters'

export function Filters() {
        // we recover the filter state and the function to change it
    const { filters, setFilters } = useFilters()
    
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

    const handleChangeMinPrice = event => {
        const newValue = event.target.value
        if (parseInt(newValue) < filters.maxPrice) setFilters(prevFilters => ({
            ...prevFilters,
            minPrice: newValue,
        }))
    }

    const handleChangeMaxPrice = event => {
        const newValue = event.target.value
        if (parseInt(newValue) > filters.minPrice) setFilters(prevFilters => ({
            ...prevFilters,
            maxPrice: newValue,
        })) 
    }
  
    return(
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
                <div className="">
                    <div className="flex px-2">
                        <p className="w-[130px] text-center">min: {filters.minPrice}</p>
                        <span> - </span> 
                        <p className="w-[130px] text-center">max: {filters.maxPrice}</p>
                    </div>

                    <div className="flex gap-2 px-2">
                        <input onChange={handleChangeMinPrice} type="range" min={0} max={2000} value={filters.minPrice} />
                        <input onChange={handleChangeMaxPrice} type="range" min={0} max={2000} value={filters.maxPrice} />
                    </div>
                </div>
            </div>
        </>
    )
}