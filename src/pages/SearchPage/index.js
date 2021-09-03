// import { useContext } from 'react'

// import Card from 'components/Card'
import ContentHeader from 'components/ContentHeader'
import SortDropdown from 'components/SortDropdown'

const SearchPage = () => {
  const title = 'Search Results'

  return (
    <>
      <ContentHeader
        name={title}
        right={
          <SortDropdown
            style={{ marginLeft: 20 }}
            options={['newest', 'oldest']}
          />
        }
      />
    </>
  )
}

export default SearchPage
