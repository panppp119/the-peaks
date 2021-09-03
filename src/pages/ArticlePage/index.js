import { useEffect, useState, useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import HtmlParser from 'react-html-parser'
import moment from 'moment'

import Loader from 'components/Loader'
import BookmarkButton from 'components/BookmarkButton'
import Toast from 'components/Toast'

import useArticle from 'hooks/useArticle'
import { BookmarkContext } from 'contexts/bookmarkContext'

import * as AP from './articlePage.style'

const ArticlePage = () => {
  const { params } = useRouteMatch()
  const { loading, article, getArticle } = useArticle()

  const id = params.id.replaceAll('_', '/') || ''
  const dateFormat = 'ddd DD MMM YYYY HH:mm [GMT]ZZ'

  const [bookmarkStatus, setBookmarkStatus] = useState('add')
  const [showToast, setShowToast] = useState(false)

  const { bookmark, setBookmark } = useContext(BookmarkContext)

  useEffect(() => {
    getArticle(id, { 'show-fields': 'thumbnail,body,main,headline' })
    hasBookmark() && setBookmarkStatus('remove')
  }, [])

  const ChangeBookmarkStatus = () => {
    if (hasBookmark()) {
      const index = bookmark.findIndex((article) => article.id === id)

      let updateBookmark = [...bookmark]
      updateBookmark.splice(index, 1)

      setBookmark(updateBookmark)
      setBookmarkStatus('add')
    } else {
      setBookmark((prevBookmark) => [...prevBookmark, article])
      setBookmarkStatus('remove')
    }

    setShowToast(true)
  }

  const hasBookmark = () => {
    return bookmark.find((item) => item.id === id) !== undefined
  }

  useEffect(() => {
    if (!!showToast) {
      setTimeout(() => {
        setShowToast(false)
      }, 3000)
    }
  }, [showToast])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AP.Container>
          <AP.Content>
            <AP.ContentHeader>
              <BookmarkButton
                type={bookmarkStatus}
                onClick={ChangeBookmarkStatus}
              />

              <p>{moment(article.webPublicationDate).format(dateFormat)}</p>
              <h2>{article.webTitle}</h2>
              <h4>{article.fields?.headline}</h4>
            </AP.ContentHeader>
          </AP.Content>

          <AP.Content>
            <AP.ContentThumbnail className='mobile'>
              {HtmlParser(article.fields?.main)}
            </AP.ContentThumbnail>

            <AP.ContentDetail>
              <AP.Line />
              {HtmlParser(article.fields?.body)}
            </AP.ContentDetail>

            <AP.ContentThumbnail className='desktop'>
              {HtmlParser(article.fields?.main)}
            </AP.ContentThumbnail>
          </AP.Content>
        </AP.Container>
      )}

      {showToast && <Toast type={bookmarkStatus} />}
    </>
  )
}

export default ArticlePage
