import { useEffect, useState, useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import HtmlParser from 'react-html-parser'
import moment from 'moment'

import MainLayout from 'components/MainLayout'
import Loader from 'components/Loader'
import BookmarkButton from 'components/BookmarkButton'
import Toast from 'components/Toast'

import { getArticle } from 'api/article'
import { LoadingContext } from 'contexts/loadingContext'
import * as CONST from 'constants/loadingConstant'

import * as AP from './articlePage.style'

const ArticlePage = () => {
  const { params } = useRouteMatch()
  const { loading, dispatch } = useContext(LoadingContext)
  const dateFormat = 'ddd DD MMM YYYY HH:mm [GMT]ZZ'

  const [article, setArticle] = useState({})
  const [bookmarkStatus, setBookmarkStatus] = useState('add')
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    dispatch({ type: CONST.IS_LOADING, loading: true })

    const id = params.id.replaceAll('_', '/') || ''
    const data = await getArticle(id, { 'show-fields': 'body,main,headline' })

    setArticle(data)
    dispatch({ type: CONST.STOP_LOADING, loading: false })
  }

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
    <MainLayout title={article.webTitle}>
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
    </MainLayout>
  )
}

export default ArticlePage
