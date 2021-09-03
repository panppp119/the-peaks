import styled from 'styled-components'

import ContentHeader from 'components/ContentHeader'
import Card from 'components/articles/Card'
import Loader from 'components/Loader'

const Container = styled.div`
  margin-bottom: 50px;
  min-height: 150px;
`

const Articles = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);
  min-height: 130px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const NewsGroup = ({ name, type, articles, loading }) => {
  return (
    <Container>
      <ContentHeader name={name} />

      {loading ? (
        <Loader />
      ) : (
        <Articles>
          {articles[type] &&
            articles[type].map((article, index) => {
              const detail = {
                title: article.webTitle,
                image: article.fields?.thumbnail,
                path: article.id,
                type,
              }

              return (
                <Card
                  key={index}
                  detail={detail}
                  width='350px'
                  height='347px'
                />
              )
            })}
        </Articles>
      )}
    </Container>
  )
}

export default NewsGroup
