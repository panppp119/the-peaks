import styled from 'styled-components'
import { Link } from 'react-router-dom'

import logo from 'assets/images/logo.svg'

const Container = styled(Link)`
  background-image: ${({ custom }) => `url(${custom.image})`};
  background-color: var(--secondary);
  background-size: cover;
  background-repeat: none;
  packground-position: center;
  width: ${({ custom }) => (custom.width ? `${custom.width}` : '200px')};
  height: ${({ custom }) => (custom.height ? `${custom.height}` : '200px')};
  position: relative;
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
          return '#999999'
      }
    }};
`

const Media = styled.div`
  position: absolute;
  top: calc(50% - 150px);
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  padding: 50px;

  img {
    max-width: 240px;
    width: 100%;
  }
`

const Detail = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(9, 53, 123, 0.9);
  color: var(--white);
  min-height: 130px;
  word-break: break-word;
`

const Title = styled('h3')`
  margin-bottom: 10px !important;
  line-height: 31px;
`

const Card = (props) => {
  const { detail, width, height } = props
  const path = detail.path && detail.path.replaceAll('/', '_')

  return (
    <Container
      custom={{ image: detail?.image, width, height, type: detail?.type }}
      to={path}
    >
      {!detail?.image && (
        <Media>
          <img src={logo} alt='logo' />
        </Media>
      )}

      <Detail>
        <Title>{detail.title}</Title>
        {detail.subtitle && <p>{detail.subtitle}</p>}
      </Detail>
    </Container>
  )
}

export default Card
