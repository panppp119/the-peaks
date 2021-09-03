import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled(Link)`
  background-color: var(--blue);
  position: relative;
  min-height: 150px;
  text-decoration: none;
  border-bottom: 3px solid
    ${({ custom }) => {
      switch (custom.type) {
        case 'sport':
          return 'var(--error)'
        case 'culture':
          return 'var(--warning)'
        case 'lifeandstyle':
          return 'var(--blue)'
        default:
          return 'var(--error)'
      }
    }};
`

const Detail = styled.div`
  background-color: rgba(9, 53, 123, 0.9);
  color: var(--white);
  height: calc(100% - 20px);
  word-break: break-word;
  padding: 10px;
`

const Title = styled('h3')`
  margin-bottom: 10px !important;
  line-height: 31px;
`

const Card = (props) => {
  const { detail } = props
  const path = detail.path && detail.path.replaceAll('/', '_')

  return (
    <Container custom={{ type: detail?.type }} to={path}>
      <Detail>
        <Title>{detail.title}</Title>
        {detail.subtitle && <p>{detail.subtitle}</p>}
      </Detail>
    </Container>
  )
}

export default Card
