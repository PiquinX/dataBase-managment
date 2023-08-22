import { useReducer, useEffect } from 'react'
import { FILTER_FUNCTION_NAMES, InitialFilters, FilterReducer } from './FilterReducer'

export function useFilterReducer (){

    const [state, dispatch] = useReducer(FilterReducer, InitialFilters)

    const clearFilters = ()=> dispatch({
        type: FILTER_FUNCTION_NAMES.clear,
    })

    const changeCategory = newCategory => dispatch({
        type: FILTER_FUNCTION_NAMES.category,
        payload: newCategory
    })

    const changeMinPrice = newMinPrice => dispatch({
        type: FILTER_FUNCTION_NAMES.minPrice,
        payload: newMinPrice
    })

    const changeMaxPrice = newMaxPrice => dispatch({
        type: FILTER_FUNCTION_NAMES.maxPrice,
        payload: newMaxPrice
    })

    const changeSearch = newSearch => dispatch({
        type: FILTER_FUNCTION_NAMES.search,
        payload: newSearch
    })

    useEffect(()=>{
        localStorage.setItem('Filters', JSON.stringify(state))
    },[state])

    return {clearFilters, changeCategory, changeMinPrice, changeMaxPrice, changeSearch, state}
}