import { Helmet } from 'react-helmet'

import * as ML from './main_layout.style'

const MainLayout = (props) => {
  const { children, title } = props

  const mainTitle = 'The Peaks'
  const pageTitle = title ? ` | ${title}` : ''

  return (
    <ML.Layout>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{`${mainTitle}${pageTitle}`}</title>
      </Helmet>

      <ML.Header>
        <ML.Container>
          <ML.Logo to='/'>Logo</ML.Logo>
          <div className='search'>Search</div>
        </ML.Container>
      </ML.Header>

      <ML.Content>
        <ML.Container>{children}</ML.Container>
      </ML.Content>

      <ML.Footer />
    </ML.Layout>
  )
}

export default MainLayout
