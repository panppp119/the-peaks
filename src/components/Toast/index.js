import styled from 'styled-components'

import { ReactComponent as BookmarkIcon } from 'assets/images/bookmark-icon.svg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  font-size: 14px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: var(--white);
  background-color: ${({ type }) =>
    type === 'add' ? 'var(--error)' : 'var(--remove)'};

  svg {
    fill: var(--white);
    margin-right: 10px;
  }
`

const Toast = ({ type }) => {
  return (
    <Container type={type}>
      <BookmarkIcon />{' '}
      {type === 'add' ? 'REMOVED TO BOOKMARK' : 'SAVED TO BOOKMARK'}
    </Container>
  )
}

export default Toast
