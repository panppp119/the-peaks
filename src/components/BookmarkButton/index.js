import styled from 'styled-components'

import { ReactComponent as BookmarkIcon } from 'assets/images/bookmark-icon.svg'

const Button = styled('button')`
  display: flex;
  align-items: center;
  font-size: 13px;
  line-height: 22px;
  cursor: pointer;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 4px;
  padding: 5px 10px;

  svg {
    margin-right: 10px;
    fill: var(--white);
  }
`

const BookmarkButton = ({ type, onClick }) => {
  return (
    <Button onClick={onClick}>
      <BookmarkIcon type={type} /> {`${type ? type.toUpperCase() : 'VIEW'}`}{' '}
      BOOKMARK
    </Button>
  )
}

export default BookmarkButton
