import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
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

export const Media = styled.div`
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

export const Detail = styled.div`
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

export const Title = styled('h3')`
  margin-bottom: 10px !important;
  line-height: 31px;
`
