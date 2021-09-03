import { useEffect, useState, useContext } from 'react'

import { getArticles } from 'api/article'
import { SearchContext } from 'contexts/searchContext'
import { SortContext } from 'contexts/sortContext'

const useSearch = (query, pageNumber) => {
  const [loading, setLoading] = useState(false)

  const { setSearchResult, setSearchQuery } = useContext(SearchContext)
  const { sort } = useContext(SortContext)

  useEffect(() => {
    setSearchResult([])
    setSearchQuery(query)
  }, [query])

  useEffect(() => {
    setSearchResult([])
  }, [sort])

  useEffect(() => {
    if (query !== '') {
      getList()
    }
  }, [query, pageNumber, sort])

  const getList = async () => {
    setLoading(true)

    const data = await getArticles({
      q: query,
      'current-page': pageNumber,
      'order-by': sort,
      'page-size': 15,
      'show-fields': 'thumbnail,body',
    })

    setSearchResult((oldArticle) => {
      return data.length > 0 ? [...oldArticle, ...data] : oldArticle
    })
    setLoading(false)
  }

  return { loading }
}

export default useSearch
