import React from 'react'
import styled from 'styled-components'
import HeroImage from '../../assets/img/HeroImage.jpeg'
import { minBp } from '../../styles/mixins'

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${({ theme }) => `
      ${minBp(theme.breakpoints.b)} {
       
      }
  
  `};
`

const SpacingContainer = styled.div`
  text-align: center;
  margin-top: 170px;
  ${({ theme }) => `
      ${minBp(theme.breakpoints.b)} {
        margin-top: 300px;
      }
  `};
`

const BackgroundImage = styled.img`
  position: absolute;
  left: -20px;
  top: 0;
  bottom: 0;
  right: -20px;
  width: calc(100% + 20px);
  z-index: -1;
  max-width: 1660px;
  margin: 0 auto;
  margin-top: -40px;
  display: none;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
      display: initial;
    }
  `};
`

const Title = styled.h2`
  margin: 0 auto;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 39px;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
      width: 50%;
      font-size: 60px;
    }
  `};
`
const Sub = styled.h3`
  margin-bottom: 20px;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
     width: 100%;
    }
  `};
`

const Hero = () => (
  <HeroContainer>
    <BackgroundImage alt="shapes" src={HeroImage} />
    <SpacingContainer>
      <Sub>Hey I'm Luke 👋</Sub>
      <Title>
        Building responsive, scalable and accesible applications and websites.
      </Title>
      <p>
        a <b>Javascript Developer</b> with a focus on
        <b> Frontend Development</b> with <b>React.</b>
      </p>
    </SpacingContainer>
  </HeroContainer>
)

export default Hero
