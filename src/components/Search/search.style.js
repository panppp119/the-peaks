import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 4px;
  border-bottom: 2px solid var(--white);
  width: 90px;
  padding: 12px;
  cursor: pointer;
  background-color: rgba(33, 83, 163, 0);
  transition: width 1s, background-color 1s;

  &.expand {
    width: 300px;
    background-color: rgba(33, 83, 163, 1);
  }

  svg {
    fill: #fafafa;
    float: right;
    padding-right: 36px;
  }
`
