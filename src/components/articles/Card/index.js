import logo from 'assets/images/logo.svg'

import * as CC from './card.style'

const Card = (props) => {
  const { detail, width, height } = props
  const path = (detail.path && detail.path.replaceAll('/', '_')) || ''

  return (
    <CC.Container
      custom={{ image: detail?.image, width, height, type: detail?.type }}
      to={`/article/${path}`}
    >
      {!detail?.image && (
        <CC.Media>
          <img src={logo} alt='logo' />
        </CC.Media>
      )}

      <CC.Detail>
        <CC.Title>{detail.title}</CC.Title>
        {detail.subtitle && <p>{detail.subtitle}</p>}
      </CC.Detail>
    </CC.Container>
  )
}

export default Card
