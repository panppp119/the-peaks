import styled from 'styled-components'

import ContentHeader from 'components/ContentHeader'
import Card from 'components/Card'
import Loader from 'components/Loader'

const Container = styled.div`
  margin-bottom: 50px;
`

const Articles = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);
`

const NewsGroup = ({ name, type, articles, loading }) => {
  return (
    <Container>
      <ContentHeader name={name} />

      {loading ? (
        <Loader />
      ) : (
        <Articles>
          {articles[type].map((article, index) => {
            const detail = {
              title: article.webTitle,
              image: article.fields?.thumbnail,
              path: article.id,
              type,
            }

            return <Card key={index} detail={detail} width={350} height={347} />
          })}
        </Articles>
      )}
    </Container>
  )
}

export default NewsGroup
