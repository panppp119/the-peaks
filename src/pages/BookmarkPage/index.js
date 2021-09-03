import { useState, useEffect, useContext } from 'react'
import { Prompt } from 'react-router-dom'
import styled from 'styled-components'

import Card from 'components/articles/Card'
import ContentHeader from 'components/ContentHeader'
import SortDropdown from 'components/SortDropdown'

import { BookmarkContext } from 'contexts/bookmarkContext'
import { SortContext } from 'contexts/sortContext'

const Articles = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const BookmarkPage = () => {
  const title = 'All Bookmark'

  const [bookmarkList, setBookmarkList] = useState([])

  const { sort, setSort } = useContext(SortContext)
  const { bookmark } = useContext(BookmarkContext)

  useEffect(() => {
    let updateBookmark = [...bookmark]

    if (sort === 'newest') {
      updateBookmark.sort(
        (a, b) =>
          new Date(b.webPublicationDate) - new Date(a.webPublicationDate),
      )
    } else {
      updateBookmark.sort(
        (a, b) =>
          new Date(a.webPublicationDate) - new Date(b.webPublicationDate),
      )
    }

    setBookmarkList(updateBookmark)
  }, [sort])

  return (
    <>
      <Prompt
        message={(location) => location !== '/bookmark' && setSort('newest')}
      />

      <ContentHeader
        name={title}
        right={
          <SortDropdown
            style={{ marginLeft: 20 }}
            options={['newest', 'oldest']}
          />
        }
      />

      <Articles>
        {bookmarkList.length > 0 &&
          bookmarkList.map((article, index) => {
            const detail = {
              title: article.webTitle,
              image: article.fields?.thumbnail,
              path: article.id,
              type: article.sectionId,
            }

            return (
              <Card key={index} detail={detail} width='350px' height='347px' />
            )
          })}
      </Articles>
    </>
  )
}

export default BookmarkPage
