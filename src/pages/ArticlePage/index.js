import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import HtmlParser from 'react-html-parser'

import MainLayout from 'components/MainLayout'

import { getArticle } from 'api/article'

import * as AP from './articlePage.style'

const ArticlePage = () => {
  const { params } = useRouteMatch()

  const [article, setArticle] = useState({})

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const id = params.id.replaceAll('_', '/') || ''
    const data = await getArticle(id)

    setArticle(data)
  }

  console.log(`article`, article)

  return (
    <MainLayout title='Article1'>
      {article && (
        <AP.Container>
          <AP.Content>
            <AP.ContentHeader>
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
