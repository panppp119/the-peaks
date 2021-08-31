import styled from 'styled-components'

export const Spinner = styled.div`
  --border-size: 8px;
  --loader-size: 70px;

  width: 100%;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Loader = styled.div`
  border: var(--border-size) solid var(--white);
  border-top: var(--border-size) solid var(--primary);
  border-right: var(--border-size) solid var(--primary);
  border-bottom: var(--border-size) solid var(--primary);
  border-radius: 50%;
  width: var(--loader-size);
  height: var(--loader-size);
  animation: spin 2s linear infinite;
  margin: 0 auto;
`
