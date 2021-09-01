import { Suspense } from 'react'
// import { Suspense, useState, useMemo } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainLayout from 'components/MainLayout'
import Loader from 'components/Loader'
import BookmarkContextProvider from 'contexts/bookmarkContext'
import LoadingContextProvider from 'contexts/loadingContext'
import { HomePage, ArticlePage, BookmarkPage, SearchPage } from './pages'

import 'assets/styles/main.scss'

const App = () => {
  // const [bookmarks, setBookmarks] = useState([])

  // const value = useMemo(
  //   () => ({ bookmarks, setBookmarks }),
  //   [bookmarks, setBookmarks],
  // )

  return (
    <Router>
      <Suspense
        fallback={
          <MainLayout>
            <Loader />
          </MainLayout>
        }
      >
        <LoadingContextProvider>
          <BookmarkContextProvider>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/bookmark' component={BookmarkPage} />
              <Route exact path='/search' component={SearchPage} />
              <Route exact path='/:id' component={ArticlePage} />
            </Switch>
          </BookmarkContextProvider>
        </LoadingContextProvider>
      </Suspense>
    </Router>
  )
}

export default App
