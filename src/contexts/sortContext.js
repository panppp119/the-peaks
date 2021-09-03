import { createContext, useState, useEffect } from 'react'

export const SortContext = createContext('newest')

const SortContextProvider = (props) => {
  const [sort, setSort] = useState('newest')

  useEffect(() => {
    setSort(sort)
  }, [sort])

  return (
    <SortContext.Provider value={{ sort, setSort }}>
      {props.children}
    </SortContext.Provider>
  )
}

export default SortContextProvider
