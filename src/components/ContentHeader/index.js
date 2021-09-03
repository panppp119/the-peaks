import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;

  button {
    margin-right: 20px;
  }

  select {
    width: 255px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.45);
    padding: 0 10px;
    font-size: 16px;
    outline: none;
  }

  &.mobile {
    display: flex;
  }

  &.desktop {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;

    &.mobile {
      display: none;
    }

    &.desktop {
      display: flex;
    }
  }
`

const ContentHeader = ({ name, right, style }) => {
  return (
    <Container>
      <HeaderRight className='mobile'>{right}</HeaderRight>

      <h1>{name}</h1>

      <HeaderRight className='desktop'>{right}</HeaderRight>
    </Container>
  )
}

export default ContentHeader
