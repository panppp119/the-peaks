import { useContext } from 'react'

import MainLayout from 'components/MainLayout'
import Card from 'components/Card'
import { BookmarkContext } from 'contexts/bookmarkContext'

const BookmarkPage = () => {
  const { bookmarks } = useContext(BookmarkContext)

  return (
    <MainLayout title='Bookmark'>
      {bookmarks.map((bookmark, index) => {
        return <Card key={index} />
      })}
    </MainLayout>
  )
}

export default BookmarkPage
