// import { useContext } from 'react'

import MainLayout from 'components/MainLayout'
// import Card from 'components/Card'
import ContentHeader from 'components/ContentHeader'
import SortDropdown from 'components/SortDropdown'

const SearchPage = () => {
  const title = 'Search Results'

  return (
    <MainLayout title={title}>
      <ContentHeader
        name={title}
        right={
          <SortDropdown
            style={{ marginLeft: 20 }}
            options={['newest', 'oldest']}
          />
        }
      />
    </MainLayout>
  )
}

export default SearchPage
