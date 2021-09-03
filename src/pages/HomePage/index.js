import { useEffect, useContext } from 'react'

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
    console.log(1)
    setSort('newest')
  }, [])

  useEffect(() => {
    console.log(2)
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
      {sections.map((section, index) => {
        const { name, type } = section

        if (type === 'news') {
          return <TopStoriesNews key={index} name={name} type={type} />
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
