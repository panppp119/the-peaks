import axios from 'axios'

// import * as CONST from 'constants/loadingConstant'

const request = axios.create({
  baseURL: 'https://content.guardianapis.com',
  timeout: 3000,
  params: {
    'api-key': process.env.REACT_APP_NEWS_KEY,
  },
})

export const getArticles = async (params) => {
  try {
    // dispatch({ type: CONST.IS_LOADING, loading: true })

    const data = await request.get(`/search`, { params })
    const response = data.data.response || {}

    if (data.status === 200) {
      return response.results
    }

    // dispatch({ type: CONST.STOP_LOADING, loading: false })
  } catch (err) {
    console.log(err)
  }
}

export const getArticle = async (id, params) => {
  try {
    // dispatch({ type: CONST.IS_LOADING, loading: true })

    const data = await request.get(`/${id}`, { params })
    const response = data.data.response || {}

    if (data.status === 200) {
      return response.content
    }

    // dispatch({ type: CONST.STOP_LOADING, loading: false })
  } catch (err) {
    console.log(err)
  }
}
