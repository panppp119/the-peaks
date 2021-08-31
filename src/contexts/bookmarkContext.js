import { createContext, useReducer, useEffect } from 'react'

import { bookmarkReducer } from 'reducers/bookmarkReducer'

export const BookmarkContext = createContext([])

const BookmarkContextProvider = (props) => {
  const [bookmarks, dispatch] = useReducer(bookmarkReducer, [], () => {
    const localData = localStorage.getItem('bookmarks')

    return localData !== null ? JSON.parse(localData) : []
  })

  useEffect(() => {}, [bookmarks])

  return (
    <BookmarkContext.Provider value={{ bookmarks, dispatch }}>
      {props.children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkContextProvider
