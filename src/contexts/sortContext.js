import { createContext, useState, useEffect, useMemo } from 'react'

export const SortContext = createContext('newest')

const SortContextProvider = (props) => {
  const [sort, setSort] = useState('newest')

  const value = useMemo(() => ({ sort, setSort }), [sort, setSort])

  useEffect(() => {
    setSort(sort)
  }, [sort])

  return (
    <SortContext.Provider value={value}>{props.children}</SortContext.Provider>
  )
}

export default SortContextProvider
