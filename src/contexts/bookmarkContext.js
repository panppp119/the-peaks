import { createContext, useState, useEffect, useMemo } from 'react'

export const BookmarkContext = createContext([])

const BookmarkContextProvider = (props) => {
  const [bookmark, setBookmark] = useState(
    JSON.parse(localStorage.getItem('bookmark')),
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
