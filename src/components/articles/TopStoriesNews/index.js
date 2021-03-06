import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import ContentHeader from 'components/ContentHeader'
import BookmarkButton from 'components/BookmarkButton'
import SortDropdown from 'components/SortDropdown'
import Loader from 'components/Loader'
import Card from 'components/articles/Card'
import TitleCard from 'components/articles/TitleCard'

export const Container = styled.div`
  margin-bottom: 50px;
`

export const Articles = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);
  min-height: 150px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const TopStoriesNews = ({ name, type, articles, loading }) => {
  const history = useHistory()

  const leftArticle = (articles[type] && articles[type][0]) || {}
  const rightArticles =
    (articles[type] && articles[type].filter((article, index) => index > 0)) ||
    []

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

            <SortDropdown options={['newest', 'oldest']} />
          </>
        }
      />

      {loading ? (
        <Loader />
      ) : (
        <Articles>
          <Card
            detail={{
              title: leftArticle.webTitle,
              image: leftArticle.fields?.thumbnail,
              path: leftArticle.id,
              type,
            }}
            width='100%'
            height='100%'
          />

          <Cards>
            {rightArticles.map((article, index) => {
              const detail = {
                title: article.webTitle,
                image: article.fields?.thumbnail,
                path: article.id,
                type,
              }

              if (index < 2) {
                return (
                  <Card
                    key={index}
                    detail={detail}
                    width='100%'
                    height='252px'
                  />
                )
              } else {
                return <TitleCard key={index} detail={detail} />
              }
            })}
          </Cards>
        </Articles>
      )}
    </Container>
  )
}

export default TopStoriesNews
