import { createContext, useReducer, useEffect } from 'react'

import { loadingReducer } from 'reducers/loadingReducer'

export const LoadingContext = createContext(false)

const LoadingContextProvider = (props) => {
  const [loading, dispatch] = useReducer(loadingReducer, false, () => {
    const localData = localStorage.getItem('loading')

    return localData !== null ? localData : false
  })

  useEffect(() => {
    localStorage.setItem('loading', loading)
  }, [loading])

  return (
    <LoadingContext.Provider value={{ loading, dispatch }}>
      {props.children}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider
