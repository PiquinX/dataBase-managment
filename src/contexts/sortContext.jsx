import { createContext, useEffect, useState } from 'react'

// We create the context, this one is used to be called with the useContext().
export const SortContext = createContext()

// We create a provider, this one is used to wrap in the things that we want to be using the context.
export function SortProvider ({ children }) {
  const [sort, setSort] = useState()

  const changeSort = (newSort)=> {
    if(newSort[0] === sort[0]) setSort([newSort, true])
    else setSort([newSort, false])
  }

  return (
    <SortContext.Provider value={{
      sort,
      changeSort
    }}
    >
      {children}
    </SortContext.Provider>
  )
}