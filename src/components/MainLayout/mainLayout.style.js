import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Layout = styled.div`
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: auto;
  position: relative;
`

export const Header = styled('header')`
  height: 100px;
  background-color: var(--primary);
  color: var(--white);

  @media screen and (min-width: 1024px) {
    height: 120px;
  }
`

export const Logo = styled(Link)`
  outline: none;
  text-decoration: none;

  &:visited {
    color: var(--white);
  }

  &:focus {
    color: var(--white);
    background: none;
  }

  img {
    height: 40px;
    padding: 28px 0;
  }

  @media screen and (min-width: 1024px) {
    img {
      height: calc(120px - (34px * 2));
      padding: 32px 0;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  min-height: calc(100% - (100px + 180px));
  background-color: var(--white);
  padding: 30px 0;

  @media screen and (min-width: 1024px) {
    min-height: calc(100% - (120px + 220px + 100px));
    padding: 50px 0;
  }
`

export const Footer = styled('footer')`
  width: 100%;
  height: 120px;
  background-color: var(--primary);

  @media screen and (min-width: 1024px) {
    height: 220px;
  }
`
