import { useEffect, useState, useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import HtmlParser from 'react-html-parser'
import moment from 'moment'

import MainLayout from 'components/MainLayout'
import Loader from 'components/Loader'

import { getArticle } from 'api/article'
import { LoadingContext } from 'contexts/loadingContext'
import * as CONST from 'constants/loadingConstant'

import * as AP from './articlePage.style'

const ArticlePage = () => {
  const { params } = useRouteMatch()
  const { loading, dispatch } = useContext(LoadingContext)
  const dateFormat = 'ddd DD MMM YYYY HH:mm [GMT]ZZ'

  const [article, setArticle] = useState({})

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    dispatch({ type: CONST.IS_LOADING, loading: true })

    const id = params.id.replaceAll('_', '/') || ''
    const data = await getArticle(id)

    setArticle(data)
    dispatch({ type: CONST.STOP_LOADING, loading: false })
  }

  return (
    <MainLayout title='Article1'>
      {loading ? (
        <Loader />
      ) : (
        <AP.Container>
          <AP.Content>
            <AP.ContentHeader>
              <p>{moment(article.webPublicationDate).format(dateFormat)}</p>
              <h2>{article.webTitle}</h2>
              <h4>{article.fields?.trailText}</h4>
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
    </MainLayout>
  )
}

export default ArticlePage
