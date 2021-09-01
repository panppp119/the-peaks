import { useState, useEffect } from 'react'

import MainLayout from 'components/MainLayout'
import NewsGroup from 'components/NewsGroup'

import { getArticles } from 'api/article'
import TopStoriesNews from 'components/TopStoriesNews'

const initialArticles = {
  news: [],
  sport: [],
  culture: [],
  lifeandstyle: [],
}

const HomePage = () => {
  const [articles, setArticles] = useState(initialArticles)

  const sections = [
    { type: 'news', name: 'Top Stories', pageSize: 5 },
    { type: 'sport', name: 'Sports', pageSize: 3 },
    { type: 'culture', name: 'Cultures', pageSize: 3 },
    { type: 'lifeandstyle', name: 'Lifestyles', pageSize: 3 },
  ]

  useEffect(() => {
    sections.map((section) => getList(section))
  }, [])

  const getList = async (section) => {
    const { type, pageSize } = section
    const params = {
      section: type,
      'page-size': pageSize,
      'order-by': 'newest',
      'show-fields': 'thumbnail,body',
    }

    const list = await getArticles(params)
    setArticles((oldArticles) => ({ ...oldArticles, [type]: list }))

    return list
  }

  return (
    <MainLayout>
      {sections.map((section, index) => {
        const { name, type } = section

        if (type === 'news') {
          return (
            <TopStoriesNews
              key={index}
              name={name}
              type={type}
              articles={articles}
            />
          )
        } else {
          return (
            <NewsGroup
              key={index}
              name={name}
              type={type}
              articles={articles}
            />
          )
        }
      })}
    </MainLayout>
  )
}

export default HomePage
