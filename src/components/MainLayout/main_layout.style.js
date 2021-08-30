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
  display: flex;
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
`

export const Content = styled.div`
  width: 100%;
  height: 1500px;
  background-color: var(--white);
  padding-top: 44px;
  paddding-bottom: 100px;
`

export const Footer = styled('footer')`
  width: 100%;
  height: 220px;
  background-color: var(--primary);
`