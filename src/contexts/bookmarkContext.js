import { createContext, useReducer, useEffect, useMemo } from 'react'

import { bookmarkReducer } from 'reducers/bookmarkReducer'

export const BookmarkContext = createContext([])

const BookmarkContextProvider = (props) => {
  const [bookmarks, dispatch] = useReducer(bookmarkReducer, [], () => {
    const localData = localStorage.getItem('bookmarks')

    return localData !== null ? JSON.parse(localData) : []
  })

  const value = useMemo(() => ({ bookmarks, dispatch }), [bookmarks, dispatch])

  // useEffect(() => {}, [bookmarks])

  return (
    <BookmarkContext.Provider value={value}>
      {props.children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkContextProvider
