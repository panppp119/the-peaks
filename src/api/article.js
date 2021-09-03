import axios from 'axios'

const request = axios.create({
  baseURL: 'https://content.guardianapis.com',
  params: {
    'api-key': process.env.REACT_APP_NEWS_KEY,
  },
})

export const getArticles = async (params) => {
  try {
    const data = await request.get(`/search`, { params })
    const response = data.data.response || {}

    if (data.status === 200) {
      return response.results || []
    }
  } catch (err) {
    console.log(err)
  }
}

export const getArticle = async (id, params) => {
  try {
    const data = await request.get(`/${id}`, { params })
    const response = data.data.response || {}

    if (data.status === 200) {
      return response.content || {}
    }
  } catch (err) {
    console.log(err)
  }
}
