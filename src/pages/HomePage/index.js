import { useEffect } from 'react'

import NewsGroup from 'components/articles/NewsGroup'
import TopStoriesNews from 'components/articles/TopStoriesNews'

import useArticles from 'hooks/useArticles'

const HomePage = () => {
  const { loading, articles, getArticles } = useArticles()

  const sections = [
    { type: 'news', name: 'Top Stories', pageSize: 5 },
    { type: 'sport', name: 'Sports', pageSize: 3 },
    { type: 'culture', name: 'Cultures', pageSize: 3 },
    { type: 'lifeandstyle', name: 'Lifestyles', pageSize: 3 },
  ]

  useEffect(() => {
    sections.map(({ type, pageSize }) => {
      const params = {
        section: type,
        'page-size': pageSize,
        'order-by': 'newest',
        'show-fields': 'thumbnail,body',
      }

      getArticles(type, params)
    })
  }, [])

  return (
    <>
      {sections.map((section, index) => {
        const { name, type } = section

        if (type === 'news') {
          return (
            <TopStoriesNews
              key={index}
              name={name}
              type={type}
              articles={articles}
              loading={loading}
            />
          )
        } else {
          return (
            <NewsGroup
              key={index}
              name={name}
              type={type}
              articles={articles}
              loading={loading}
            />
          )
        }
      })}
    </>
  )
}

export default HomePage
