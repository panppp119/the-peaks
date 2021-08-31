import { useState, useEffect, useContext } from 'react'

import MainLayout from 'components/MainLayout'
import Card from 'components/Card'
import Loader from 'components/Loader'

import { getArticles } from 'api/article'
import { LoadingContext } from 'contexts/loadingContext'
import * as CONST from 'constants/loadingConstant'

import * as HP from './homePage.style'

const initialArticles = {
  news: [],
  sport: [],
  culture: [],
  lifeandstyle: [],
}

const HomePage = () => {
  const [articles, setArticles] = useState(initialArticles)
  const { loading, dispatch } = useContext(LoadingContext)

  const sections = [
    { type: 'news', name: 'Top Stories', pageSize: 5 },
    { type: 'sport', name: 'Sports', pageSize: 3 },
    { type: 'culture', name: 'Cultures', pageSize: 3 },
    { type: 'lifeandstyle', name: 'Lifestyles', pageSize: 3 },
  ]

  useEffect(() => {
    dispatch({ type: CONST.IS_LOADING, loading: true })

    sections.map(async (section, index) => {
      if (sections.length === index + 1) {
        const list = (await getList(section)) || []

        list.length > 0 &&
          dispatch({ type: CONST.STOP_LOADING, loading: false })
      } else {
        await getList(section)
      }
    })
  }, [])

  const getList = async (section) => {
    const { type, pageSize } = section
    const params = {
      section: type,
      pageSize,
      orderBy: 'newest',
      showFields: 'thumbnail',
    }

    const list = await getArticles(params)
    setArticles((oldArticles) => ({ ...oldArticles, [type]: list }))

    return list
  }

  const title = (type, name) => {
    if (type === 'news') {
      return <h1 style={{ marginBottom: 30 }}>{name}</h1>
    } else {
      return <h2 style={{ marginBottom: 30 }}>{name}</h2>
    }
  }

  return (
    <MainLayout>
      {sections.map((section, index) => {
        const { name, type } = section

        return (
          <div className='section' key={index} style={{ marginBottom: 50 }}>
            {title(type, name)}

            {loading ? (
              <Loader />
            ) : (
              <HP.Articles>
                {articles[type].map((article, index) => {
                  const detail = {
                    title: article.webTitle,
                    image: article.fields?.thumbnail,
                    path: article.id,
                    type,
                  }

                  return (
                    <Card
                      key={index}
                      detail={detail}
                      width={350}
                      height={347}
                    />
                  )
                })}
              </HP.Articles>
            )}
          </div>
        )
      })}
    </MainLayout>
  )
}

export default HomePage
