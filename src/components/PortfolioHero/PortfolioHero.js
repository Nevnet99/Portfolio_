import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  ImgBackground,
  Title,
  Description,
} from './PortfolioHero.styles'
import ArrowDown from '../Buttons/ArrowDown'

const PortfolioHero = ({ description, title, backgroundImg }) => (
  <Container>
    <ImgBackground src={backgroundImg.fluid.src} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ArrowDown height={32} width={32} />
  </Container>
)

export default PortfolioHero
PropTypes.PortfolioHero = {
  backgroundImg: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
}
