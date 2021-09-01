import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  grid-column-gap: 30px;
`

export const ContentHeader = styled.div`
  h4 {
    margin-top: 10px !important;
  }
`

export const ContentDetail = styled.div`
  p {
    margin-top: 20px !important;

    &:first-child {
      margin-top: 0;
    }
  }

  a,
  a:visited {
    color: var(--primary);
  }
`
export const ContentThumbnail = styled.div`
  margin-top: 32px;

  figure {
    margin: 0;

    img {
      width: 100%;
      height: auto;
    }
  }

  figcaption {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.87);

    span {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.87);
    }
  }
`

export const Line = styled('hr')`
  margin: 15px 0;
  height: 2px;
  border: none;
  background-color: rgba(151, 151, 151, 0.2);
`
