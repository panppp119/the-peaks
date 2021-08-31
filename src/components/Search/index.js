import { useState } from 'react'
import classnames from 'classnames'

import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg'

import * as SC from './search.style'

const Search = () => {
  const [expand, setExpand] = useState(false)
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
  }

  const onBlur = (e) => {
    if (query === '') {
      setExpand(false)
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
          value={query}
          onBlur={onBlur}
        />
      )}
      <SearchIcon />
    </SC.Container>
  )
}

export default Search
