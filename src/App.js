import { Suspense } from 'react'
// import { Suspense, useState, useMemo } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainLayout from 'components/MainLayout'
import Loader from 'components/Loader'
import SortContextProvider from 'contexts/sortContext'
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
      <MainLayout>
        <Suspense fallback={<Loader />}>
          <SortContextProvider>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/bookmark' component={BookmarkPage} />
              <Route exact path='/search' component={SearchPage} />
              <Route exact path='/:id' component={ArticlePage} />
            </Switch>
          </SortContextProvider>
        </Suspense>
      </MainLayout>
    </Router>
  )
}

export default App
