import { useEffect, useContext } from 'react'
import { Prompt } from 'react-router-dom'

import NewsGroup from 'components/articles/NewsGroup'
import TopStoriesNews from 'components/articles/TopStoriesNews'

import useArticles from 'hooks/useArticles'
import { SortContext } from 'contexts/sortContext'

const HomePage = () => {
  const { loading, articles, getArticles } = useArticles()
  const { sort, setSort } = useContext(SortContext)

  const sections = [
    { type: 'news', name: 'Top Stories', pageSize: 5 },
    { type: 'sport', name: 'Sports', pageSize: 3 },
    { type: 'culture', name: 'Cultures', pageSize: 3 },
    { type: 'lifeandstyle', name: 'Lifestyles', pageSize: 3 },
  ]

  useEffect(() => {
    setSort('newest')
  }, [])

  useEffect(() => {
    sections.map(({ type, pageSize }) => {
      const params = {
        section: type,
        'page-size': pageSize,
        'order-by': sort,
        'show-fields': 'thumbnail,body',
      }

      getArticles(type, params)
    })
  }, [sort])

  return (
    <>
      <Prompt message={(location) => location !== '/' && setSort('newest')} />

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
