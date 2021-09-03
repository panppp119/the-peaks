import { useState } from 'react'

import { getArticles as getList } from 'api/article'

const initialArticles = {
  news: [],
  sport: [],
  culture: [],
  lifeandstyle: [],
}

const useArticles = () => {
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState(initialArticles)

  const getArticles = async (type, params) => {
    setLoading(true)

    const list = await getList(params)
    setArticles((oldArticles) => ({ ...oldArticles, [type]: list }))

    setLoading(false)

    return list
  }

  return { loading, articles, getArticles }
}

export default useArticles
