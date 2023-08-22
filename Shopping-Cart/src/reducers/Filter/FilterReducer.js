export const FILTER_FUNCTION_NAMES = {
    clear: 'CLEAR',
    category: 'CHANGE_CATEGORY',
    minPrice: 'CHANGE_MIN_PRICE',
    maxPrice: 'CHANGE_MAX_PRICE',
    search: 'CHANGE_SEARCH'
}

export const InitialFilters = JSON.parse(localStorage.getItem('Filters')) ||
{
  category: 'all',
  minPrice: 0,
  maxPrice: 2000,
  search: ''
}

export const FilterReducer = (state, action) => {

    const { type, payload } = action

    switch (type) {
        case FILTER_FUNCTION_NAMES.clear: {
            return {
                category: 'all',
                minPrice: 0,
                maxPrice: 2000,
                search: ''
              }
        }

        case FILTER_FUNCTION_NAMES.category: {
            return {
                ...state,
                category: payload
            }
        }

        case FILTER_FUNCTION_NAMES.minPrice: {
            return {
                ...state,
                minPrice: payload
            }
        }

        case FILTER_FUNCTION_NAMES.maxPrice: {
            return {
                ...state,
                maxPrice: payload
            }
        }

        case FILTER_FUNCTION_NAMES.search: {
            return {
                ...state,
                search: payload
            }
        }
    }
}