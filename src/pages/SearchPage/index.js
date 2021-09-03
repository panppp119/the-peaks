import { useState, useEffect, useContext, useRef, useCallback } from 'react'
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
  grid-template-columns: auto auto auto;
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);
`

const SearchPage = () => {
  const title = 'Search Results'
  const history = useHistory()

  const [pageNumber, setPageNumber] = useState(1)

  const { searchResult, searchQuery, setSearchQuery } =
    useContext(SearchContext)
  const { loading, hasMore } = useSearch(searchQuery, pageNumber)

  const observer = useRef()
  const lastArticleRef = useCallback(
    (node) => {
      if (loading) return

      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })

      if (node) observer.current.observe(node)
    },
    [loading, hasMore],
  )

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

              if (searchResult.length === index + 1) {
                return (
                  <Card
                    key={index}
                    ref={lastArticleRef}
                    detail={detail}
                    width='350px'
                    height='347px'
                  />
                )
              } else {
                return (
                  <Card
                    key={index}
                    detail={detail}
                    width='350px'
                    height='347px'
                  />
                )
              }
            })
          : !loading && <p>No Data</p>}
      </Articles>
      {loading && <Loader />}
    </>
  )
}

export default SearchPage
