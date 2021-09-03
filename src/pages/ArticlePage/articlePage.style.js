import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: var(--grid-gap);

  @media screen and (min-width: 1024px) {
    grid-template-columns: 60% auto;
  }
`

export const ContentHeader = styled.div`
  p {
    color: var(--gray);
    margin-bottom: 10px !important;
    margin-top: 20px !important;
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

  figure {
    padding: 20px;
    max-width: 300px;
    width: 100%;
    margin: 0 auto;

    iframe {
      width: 100%;
    }

    figcaption {
      color: var(--gray);
      font-size: 12px;
    }
  }

  @media screen and (min-width: 1024px) {
    figure {
      max-width: 500px;
    }
  }
`
export const ContentThumbnail = styled.div`
  margin-top: 20px;

  &.mobile {
    display: block;
  }

  &.desktop {
    display: none;
  }

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

  @media screen and (min-width: 1024px) {
    margin-top: 40px;

    &.mobile {
      display: none;
    }

    &.desktop {
      display: block;
    }
  }
`

export const Line = styled('hr')`
  margin: 15px 0;
  height: 2px;
  border: none;
  background-color: rgba(151, 151, 151, 0.2);
`
