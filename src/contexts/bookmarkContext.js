import { createContext, useState, useEffect, useMemo } from 'react'

export const BookmarkContext = createContext([])

const BookmarkContextProvider = (props) => {
  const bookmarkStorage = JSON.parse(localStorage.getItem('bookmark'))
  const [bookmark, setBookmark] = useState(
    bookmarkStorage === null ? [] : bookmarkStorage,
  )

  const value = useMemo(() => {
    return { bookmark, setBookmark }
  }, [bookmark, setBookmark])

  useEffect(() => {
    setBookmark(bookmark)
    localStorage.setItem('bookmark', JSON.stringify(bookmark))
  }, [bookmark])

  return (
    <BookmarkContext.Provider value={value}>
      {props.children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkContextProvider
