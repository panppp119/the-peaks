import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import ContentHeader from 'components/ContentHeader'
import BookmarkButton from 'components/BookmarkButton'
import SortDropdown from 'components/SortDropdown'
import Loader from 'components/Loader'

export const Container = styled.div`
  margin-bottom: 50px;
`

export const Articles = styled.div`
  display: grid;
  grid-template-column: 50 auto;
  grid-column-gap: var(--grid-gap);
`

const TopStoriesNews = ({ name, type, articles, loading }) => {
  const history = useHistory()

  return (
    <Container>
      <ContentHeader
        name={name}
        right={
          <>
            <BookmarkButton
              type='view'
              onClick={() => history.push('/bookmark')}
            />

            <SortDropdown
              style={{ marginLeft: 20 }}
              options={['newest', 'oldest']}
              // onSort={getArticles}
            />
          </>
        }
      />

      {loading ? <Loader /> : <Articles></Articles>}
    </Container>
  )
}

export default TopStoriesNews
