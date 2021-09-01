import styled from 'styled-components'

export const Select = styled.div`
  position: relative;
  width: 255px;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 24px;
`

export const DisplaySelected = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid var(--gray);
  user-select: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 10px;
    top: 15px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid var(--black);
    clear: both;
  }
`

export const Options = styled.div`
  position: absolute;
  top: 0;
  background-color: var(--white);
  width: 255px;
  border: 1px solid var(--gray);

  &::after {
    content: '';
    position: absolute;
    right: 10px;
    top: 15px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--black);
    clear: both;
  }
`

export const Option = styled.div`
  padding: 5px 10px;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`
