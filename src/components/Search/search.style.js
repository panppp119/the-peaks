import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 4px;
  border-bottom: 2px solid var(--white);
  width: 90px;
  height: 40px;
  cursor: pointer;
  background-color: rgba(33, 83, 163, 0);
  transition: width 1s, background-color 1s;

  svg {
    fill: #fafafa;
    float: right;
    padding: calc((40px / 2) - 9px);
    margin-right: calc((90px / 2) - 20px);
  }

  &.expand {
    width: 300px;
    background-color: rgba(33, 83, 163, 1);
  }

  input {
    border: none;
    float: left;
    height: 40px;
    background: transparent;
    width: calc(100% - 90px);
    outline: none;
    padding-left: 20px;
    color: var(--white);
    font-size: 14px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }
`
