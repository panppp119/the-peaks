import { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainLayout from 'components/MainLayout'
import Loader from 'components/Loader'

import { HomePage, ArticlePage, BookmarkPage, SearchResultPage } from './pages'

import 'assets/styles/main.scss'

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <MainLayout>
            <Loader />
          </MainLayout>
        }
      >
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/article/:id' component={ArticlePage} />
          <Route exact path='/bookmark' component={BookmarkPage} />
          <Route exact path='/search' component={SearchResultPage} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
