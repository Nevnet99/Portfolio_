import React from 'react'
import {
  Container,
  Stat,
  Title,
  MainContainer,
} from './PortfolioStatistics.styles'

const PortfolioStatistics = ({ nodes }) => (
  <MainContainer>
    {nodes.map(({ stat, title }, index) => (
      <Container key={index}>
        <Stat>{stat}</Stat>
        <Title>{title}</Title>
      </Container>
    ))}
  </MainContainer>
)

export default PortfolioStatistics
