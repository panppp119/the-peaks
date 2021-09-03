import { useState, useEffect, useContext, useRef } from 'react'
import { Prompt, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import ContentHeader from 'components/ContentHeader'
import SortDropdown from 'components/SortDropdown'
import Card from 'components/articles/Card'
import BookmarkButton from 'components/BookmarkButton'
import Loader from 'components/Loader'

import useSearch from 'hooks/useSearch'
import { SearchContext } from 'contexts/searchContext'

const Articles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);
  margin-bottom: var(--grid-gap);
`

const SearchPage = () => {
  const title = 'Search Results'
  const history = useHistory()

  const [pageNumber, setPageNumber] = useState(0)

  const { searchResult, searchQuery, setSearchQuery } =
    useContext(SearchContext)
  const { loading } = useSearch(searchQuery, pageNumber)

  const last = useRef(null)

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(handleObserver, options)

    if (last.current) {
      observer.observe(last.current)
    }
  }, [])

  const handleObserver = (entities) => {
    const target = entities[0]
    if (target.isIntersecting) {
      setPageNumber((page) => page + 1)
    }
  }

  return (
    <>
      <Prompt
        message={(location) =>
          location.pathname !== '/search' && setSearchQuery('')
        }
      />
      <ContentHeader
        name={title}
        right={
          <>
            <BookmarkButton
              type='view'
              onClick={() => history.push('/bookmark')}
            />

            <SortDropdown
              style={{ marginLeft: 20 }}
              options={['newest', 'oldest']}
            />
          </>
        }
      />

      <Articles>
        {searchResult.length > 0
          ? searchResult.map((article, index) => {
              const detail = {
                title: article.webTitle,
                image: article.fields?.thumbnail,
                path: article.id,
                type: article.sectionId,
              }

              return (
                <Card
                  key={index}
                  detail={detail}
                  width='350px'
                  height='347px'
                />
              )
            })
          : !loading && <p>No Data</p>}
      </Articles>

      <div ref={last} />
      {loading && <Loader />}
    </>
  )
}

export default SearchPage
