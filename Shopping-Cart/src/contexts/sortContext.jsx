import { createContext, useState } from 'react'

// We create the context to be called with the useContext().
export const SortContext = createContext()

export function SortProvider ({ children }) {
  const [sort, setSort] = useState('Default')

  return (
    <SortContext.Provider value={{
      sort,
      setSort
    }}
    >
      {children}
    </SortContext.Provider>
  )
}
