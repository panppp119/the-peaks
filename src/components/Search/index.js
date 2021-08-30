import { useState } from 'react'
import classnames from 'classnames'

import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg'

import * as SC from './search.style'

const Search = () => {
  const [expand, setExpand] = useState(false)

  console.log(expand)

  return (
    <SC.Container
      className={classnames({ expand })}
      onClick={() => setExpand(!expand)}
    >
      <SearchIcon />
    </SC.Container>
  )
}

export default Search
