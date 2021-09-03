import { createContext, useState, useEffect, useMemo } from 'react'

export const SearchContext = createContext('newest')

const SearchContextProvider = (props) => {
  const [searchResult, setSearchResult] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const value = useMemo(
    () => ({ searchResult, setSearchResult, searchQuery, setSearchQuery }),
    [searchResult, setSearchResult, searchQuery, setSearchQuery],
  )

  useEffect(() => {
    setSearchResult(searchResult)
  }, [searchResult])

  useEffect(() => {
    setSearchQuery(searchQuery)
  }, [searchQuery])

  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
