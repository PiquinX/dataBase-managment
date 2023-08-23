// This varibale allow us to get acces to each of the names of the functions easier.
export const FILTER_FUNCTION_NAMES = {
  clear: 'CLEAR',
  category: 'CHANGE_CATEGORY',
  minPrice: 'CHANGE_MIN_PRICE',
  maxPrice: 'CHANGE_MAX_PRICE',
  search: 'CHANGE_SEARCH'
}

// The default value of the filters.
const defaultFilters = {
  category: 'all',
  minPrice: 0,
  maxPrice: 2000,
  search: ''
}

// This gets the Filters from the localStorage, if it doesn't find it it will be the default filters.
export const InitialFilters = JSON.parse(localStorage.getItem('Filters')) || defaultFilters

export const FilterReducer = (state, action) => {
  // We get the type, which contains which function will be executed, and the payload which contains the value passed(like a prop).
  const { type, payload } = action

  // This switch choose which function will be executed depending on the type.
  switch (type) {
    // This resets the filter to default.
    case FILTER_FUNCTION_NAMES.clear: {
      return defaultFilters
    }

    // This changes the category.
    case FILTER_FUNCTION_NAMES.category: {
      return {
        ...state,
        category: payload
      }
    }

    // This changes the minPrice.
    case FILTER_FUNCTION_NAMES.minPrice: {
      return {
        ...state,
        minPrice: payload
      }
    }

    // This changes the maxPrice.
    case FILTER_FUNCTION_NAMES.maxPrice: {
      return {
        ...state,
        maxPrice: payload
      }
    }

    // This changes the search.
    case FILTER_FUNCTION_NAMES.search: {
      return {
        ...state,
        search: payload
      }
    }
  }
}
