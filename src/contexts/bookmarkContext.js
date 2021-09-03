import { createContext, useState, useEffect, useMemo } from 'react'

export const BookmarkContext = createContext([])

const BookmarkContextProvider = (props) => {
  const [bookmark, setBookmark] = useState([])

  const value = useMemo(
    () => ({ bookmark, setBookmark }),
    [bookmark, setBookmark],
  )

  useEffect(() => {
    setBookmark(bookmark)
  }, [bookmark])

  return (
    <BookmarkContext.Provider value={value}>
      {props.children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkContextProvider
