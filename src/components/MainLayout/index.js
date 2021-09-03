import Search from 'components/Search'
import logo from 'assets/images/logo.svg'

import * as ML from './mainLayout.style'

const MainLayout = (props) => {
  const { children } = props

  return (
    <ML.Layout>
      <ML.Header>
        <ML.Container>
          <ML.Logo to='/'>
            <img src={logo} alt='the-peaks-logo' />
          </ML.Logo>

          <Search />
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
