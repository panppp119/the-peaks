import Guardian from 'guardian-js'

const api = new Guardian(process.env.REACT_APP_NEWS_KEY, false)

export const getArticles = async (params) => {
  const query = params ? params : { pageSize: 10 }

  try {
    const data = await api.content.search('', query)
    const body = JSON.parse(data.body) || {}
    console.log('articles', body)

    if (body.response.status === 'ok') {
      return body.response.results
    }
  } catch (err) {
    console.log(err)
  }
}

export const getArticle = async (id) => {
  console.log(`id`, id)

  try {
    const data = await api.item.getById(id)
    const body = JSON.parse(data.body) || {}
    console.log('article response', body)

    if (body.response.status === 'ok') {
      return body.response.results
    }
  } catch (err) {
    console.log(err)
  }
}
