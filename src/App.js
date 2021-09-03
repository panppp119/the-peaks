import { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainLayout from 'components/MainLayout'
import Loader from 'components/Loader'

import SortContextProvider from 'contexts/sortContext'
import SearchContextProvider from 'contexts/searchContext'
import BookmarkContextProvider from 'contexts/bookmarkContext'

import { HomePage, ArticlePage, BookmarkPage, SearchPage } from './pages'

import 'assets/styles/main.scss'

const App = () => {
  return (
    <Router>
      <SearchContextProvider>
        <MainLayout>
          <Suspense fallback={<Loader />}>
            <SortContextProvider>
              <BookmarkContextProvider>
                <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/search' component={SearchPage} />

                  <Route exact path='/bookmark' component={BookmarkPage} />
                  <Route exact path='/article/:id' component={ArticlePage} />

                  <Route path='*'>
                    <h3>Page not found.</h3>
                  </Route>
                </Switch>
              </BookmarkContextProvider>
            </SortContextProvider>
          </Suspense>
        </MainLayout>
      </SearchContextProvider>
    </Router>
  )
}

export default App
