import { useState, useEffect, useContext } from 'react'

import MainLayout from 'components/MainLayout'
import Card from 'components/Card'
import Loader from 'components/Loader'

import { getArticles } from 'api/article'
import { LoadingContext } from 'contexts/loadingContext'
import * as CONST from 'constants/loadingConstant'

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
    { type: 'lifeandstyle', name: 'Life and Styles', pageSize: 3 },
  ]

  useEffect(() => {
    sections.map((section) => getList(section))
  }, [])

  const getList = async (section) => {
    dispatch({ type: CONST.IS_LOADING, loading: true })

    const { type, pageSize } = section
    const params = { section: type, pageSize, orderBy: 'newest' }

    const data = await getArticles(params)

    setArticles((oldArticles) => ({ ...oldArticles, [type]: data }))
    dispatch({ type: CONST.STOP_LOADING, loading: false })
  }

  return (
    <MainLayout>
      {sections.map((section, index) => {
        const { name, type } = section

        return (
          <div className='section' key={index} style={{ marginBottom: 50 }}>
            <h1 style={{ marginBottom: 30 }}>{name}</h1>
            {loading ? (
              <Loader />
            ) : (
              <div className='articles' style={{ display: 'flex' }}>
                {articles[type].map((article, index) => {
                  return <Card key={index} />
                })}
              </div>
            )}
          </div>
        )
      })}
    </MainLayout>
  )
}

export default HomePage
