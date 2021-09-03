import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import HtmlParser from 'react-html-parser'
import moment from 'moment'

import Loader from 'components/Loader'
import BookmarkButton from 'components/BookmarkButton'
import Toast from 'components/Toast'

import useArticle from 'hooks/useArticle'

import * as AP from './articlePage.style'

const ArticlePage = () => {
  const { params } = useRouteMatch()
  const { loading, article, getArticle } = useArticle()
  const dateFormat = 'ddd DD MMM YYYY HH:mm [GMT]ZZ'

  const [bookmarkStatus, setBookmarkStatus] = useState('add')
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const id = params.id.replaceAll('_', '/') || ''
    getArticle(id, { 'show-fields': 'body,main,headline' })
  }, [])

  const ChangeBookmarkStatus = () => {
    setBookmarkStatus(bookmarkStatus === 'add' ? 'remove' : 'add')
    setShowToast(true)
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
            <AP.ContentDetail>
              <AP.Line />
              {HtmlParser(article.fields?.body)}
            </AP.ContentDetail>

            <AP.ContentThumbnail>
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
