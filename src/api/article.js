import Guardian from 'guardian-js'
import axios from 'axios'

const api = new Guardian(process.env.REACT_APP_NEWS_KEY, false)
const request = axios.create({
  baseURL: 'https://content.guardianapis.com',
  timeout: 3000,
  params: {
    'api-key': process.env.REACT_APP_NEWS_KEY,
  },
})

export const getArticles = async (params) => {
  const query = params ? params : { pageSize: 10 }

  try {
    const data = await api.content.search('', query)
    const body = JSON.parse(data.body) || {}

    if (body.response.status === 'ok') {
      return body.response.results
    }
  } catch (err) {
    console.log(err)
  }
}

export const getArticle = async (id) => {
  try {
    const data = await request.get(`/${id}`, {
      params: {
        'api-key': process.env.REACT_APP_NEWS_KEY,
        'show-fields': 'all',
      },
    })
    const response = data.data.response || {}

    if (data.status === 200) {
      return response.content
    }
  } catch (err) {
    console.log(err)
  }
}
