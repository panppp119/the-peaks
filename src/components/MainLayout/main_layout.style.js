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
  height: 120px;
  background-color: var(--primary);
  color: var(--white);
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
    height: calc(120px - (34px * 2));
    padding: 32px 0;
  }
`

export const Content = styled.div`
  width: 100%;
  min-height: calc(100% - (120px + 220px + 100px));
  background-color: var(--white);
  padding: 50px 0;
`

export const Footer = styled('footer')`
  width: 100%;
  height: 220px;
  background-color: var(--primary);
`
