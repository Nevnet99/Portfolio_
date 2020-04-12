import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  ImgBackground,
  Title,
  Description,
  StyledArrowDown,
} from './PortfolioHero.styles'

const PortfolioHero = ({ description, title, backgroundImg }) => (
  <Container>
    <ImgBackground src={backgroundImg.fluid.src} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <StyledArrowDown height={32} width={32} />
  </Container>
)

export default PortfolioHero
PropTypes.PortfolioHero = {
  backgroundImg: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
}
