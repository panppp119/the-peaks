import { useContext } from 'react'

import MainLayout from 'components/MainLayout'
import Card from 'components/Card'
import ContentHeader from 'components/ContentHeader'

import { BookmarkContext } from 'contexts/bookmarkContext'

const BookmarkPage = () => {
  const title = 'All Bookmark'
  const { bookmarks } = useContext(BookmarkContext)

  return (
    <MainLayout title={title}>
      <ContentHeader name={title} />

      {bookmarks.map((bookmark, index) => {
        return <Card key={index} />
      })}
    </MainLayout>
  )
}

export default BookmarkPage
