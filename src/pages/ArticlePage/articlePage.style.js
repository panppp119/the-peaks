import styled from 'styled-components'

export const Container = styled.div`
  --gray: rgba(0, 0, 0, 0.5);
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  grid-column-gap: 30px;
`

export const ContentHeader = styled.div`
  p {
    color: var(--gray);
    margin-bottom: 10px !important;
  }

  h4 {
    margin-top: 10px !important;
  }
`

export const ContentDetail = styled.div`
  p {
    margin-top: 20px !important;

    time {
      color: var(--gray);
    }
  }

  a,
  a:visited {
    color: var(--primary);
  }

  img {
    width: 100%;
    height: auto;
  }

  h2 {
    margin-top: 20px !important;
  }
`
export const ContentThumbnail = styled.div`
  margin-top: 40px;

  figure {
    margin: 0;

    img {
      width: 100%;
      height: auto;
    }
  }

  figcaption {
    font-size: 12px;
    color: var(--gray);

    span {
      font-size: 12px;
    }
  }
`

export const Line = styled('hr')`
  margin: 15px 0;
  height: 2px;
  border: none;
  background-color: rgba(151, 151, 151, 0.2);
`
