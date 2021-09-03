import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

export const HeaderLeft = styled.div``

export const HeaderRight = styled.div`
  justify-content: space-between;

  select {
    margin-left: 20px;
    width: 255px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.45);
    padding: 0 10px;
    font-size: 16px;
    outline: none;
  }
`

const ContentHeader = ({ name, right, style }) => {
  return (
    <Container>
      <HeaderLeft>
        <h1>{name}</h1>
      </HeaderLeft>

      <HeaderRight>{right}</HeaderRight>
    </Container>
  )
}

export default ContentHeader
