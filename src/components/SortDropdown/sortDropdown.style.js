import styled from 'styled-components'

export const Select = styled.div`
  position: relative;
  width: 155px;
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 1024px) {
    width: 255px;
  }
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
  width: 155px;
  border: 1px solid var(--gray);
  z-index: 2;

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

  @media screen and (min-width: 1024px) {
    width: 255px;
  }
`

export const Option = styled.div`
  padding: 5px 10px;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`
