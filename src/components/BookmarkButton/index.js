import { useState } from 'react'
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
  margin-bottom: 20px;

  svg {
    margin-right: 10px;
    fill: var(--white);
  }
`

const BookmarkButton = () => {
  const [type, setType] = useState('add')

  const onButtonClick = (e) => {
    e.preventDefault()
    setType((oldType) => (oldType === 'add' ? 'remove' : 'add'))
  }

  return (
    <Button onClick={onButtonClick}>
      <BookmarkIcon type={type} /> {`${type.toUpperCase()}`} BOOKMARK
    </Button>
  )
}

export default BookmarkButton
