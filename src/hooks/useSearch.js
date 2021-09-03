import { useEffect, useState, useContext } from 'react'

import { getArticles } from 'api/article'
import { SearchContext } from 'contexts/searchContext'

const useSearch = (query, pageNumber) => {
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  const { setSearchResult, setSearchQuery } = useContext(SearchContext)

  useEffect(() => {
    setSearchResult([])
    setSearchQuery(query)
  }, [query])

  useEffect(() => {
    if (query !== '') {
      getList()
    }
  }, [query, pageNumber])

  const getList = async () => {
    setLoading(true)

    const data = await getArticles({
      q: query,
      'current-page': pageNumber,
      'order-by': 'newest',
      'page-size': 15,
      'show-fields': 'thumbnail,body',
    })

    setSearchResult((oldArticle) => {
      return [...oldArticle, ...data]
    })
    setHasMore(data.length > 0)
    setLoading(false)
  }

  return { loading, hasMore }
}

export default useSearch
