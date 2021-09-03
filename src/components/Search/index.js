import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import classnames from 'classnames'

import { SearchContext } from 'contexts/searchContext'

import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg'

import * as SC from './search.style'

const Search = () => {
  const history = useHistory()

  const [expand, setExpand] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const { searchQuery, setSearchQuery } = useContext(SearchContext)

  useEffect(() => {
    if (searchQuery === '') {
      setInputValue(searchQuery)
      setExpand(false)
    }
  }, [searchQuery])

  const handleChange = (e) => {
    const value = e.target.value
    setInputValue(value)
  }

  const onBlur = (e) => {
    if (inputValue === '') setExpand(false)
  }

  const onSearch = (e) => {
    if (e.keyCode === 13) {
      setSearchQuery(inputValue)
      history.replace('/search')
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
      <SearchIcon onClick={onSearch} />
    </SC.Container>
  )
}

export default Search
