import { useState, useEffect, useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import classnames from 'classnames'

import { SearchContext } from 'contexts/searchContext'

import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg'

import * as SC from './search.style'

const Search = () => {
  const { pathname } = useLocation()
  const history = useHistory()

  const [expand, setExpand] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const { searchQuery, setSearchQuery } = useContext(SearchContext)

  useEffect(() => {
    if (searchQuery === '') {
      setInputValue(searchQuery)
      pathname !== '/search' && setExpand(false)
    } else {
      pathname !== '/search' && history.push('/search')
    }
  }, [searchQuery])

  const handleChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    pathname !== '/search' && setSearchQuery(value)
  }

  const onBlur = (e) => {
    if (inputValue === '') setExpand(false)
  }

  const onSearch = (e) => {
    if (e.keyCode === 13) {
      setSearchQuery(inputValue)
    }
  }

  return (
    <SC.Container
      className={classnames({ expand })}
      onClick={() => setExpand(!expand)}
      onBlur={onBlur}
    >
      {expand && (
        <input
          type='text'
          onChange={handleChange}
          onClick={(e) => e.stopPropagation()}
          placeholder='Search all news'
          value={inputValue}
          onBlur={onBlur}
          onKeyUp={onSearch}
        />
      )}
      <SearchIcon />
    </SC.Container>
  )
}

export default Search
