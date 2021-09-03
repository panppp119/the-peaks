import { useContext } from 'react'

import Card from 'components/articles/Card'
import ContentHeader from 'components/ContentHeader'
import SortDropdown from 'components/SortDropdown'

import { BookmarkContext } from 'contexts/bookmarkContext'

const BookmarkPage = () => {
  const title = 'All Bookmark'
  const { bookmarks } = useContext(BookmarkContext)

  return (
    <>
      <ContentHeader
        name={title}
        right={
          <SortDropdown
            style={{ marginLeft: 20 }}
            options={['newest', 'oldest']}
          />
        }
      />

      {bookmarks.map((bookmark, index) => {
        return <Card key={index} />
      })}
    </>
  )
}

export default BookmarkPage
