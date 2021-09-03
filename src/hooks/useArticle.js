import { useState } from 'react'

import { getArticle as getData } from 'api/article'

const useArticles = () => {
  const [loading, setLoading] = useState(true)
  const [article, setArticle] = useState({})

  const getArticle = async (id, params) => {
    setLoading(true)

    const data = await getData(id, params)
    setArticle(data)

    setLoading(false)

    return data
  }

  return { loading, article, getArticle }
}

export default useArticles
