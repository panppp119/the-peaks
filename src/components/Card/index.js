import styled from 'styled-components'

const Container = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-color: var(--secondary);
  background-size: cover;
  background-repeat: none;
  packground-position: center;
  width: ${(props) => `${props.width || 200}px`};
  height: ${(props) => `${props.height || 200}px`};
`

const Card = (props) => {
  const { image, title, subtitle, width, height } = props

  return (
    <Container style={(image, width, height)}>
      <div className='detail'>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </Container>
  )
}

export default Card
