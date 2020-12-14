import React from 'react'
import styled from 'styled-components'
import HeroImage from '../../assets/img/HeroImage.jpeg'
import { minBp } from '../../styles/mixins'

const HeroContainer = styled.section`
  height: 100vh;
  margin-top: 50px;
  ${({ theme }) => `
      ${minBp(theme.breakpoints.b)} {
        margin-top: 150px;
      }
  
  `};
`

const BackgroundImage = styled.img`
  position: absolute;
  left: -20px;
  top: -30px;
  bottom: 0;
  right: -20px;
  width: calc(100% + 20px);
  z-index: -1;
  max-width: 1660px;
  margin: 0 auto;
`

const BigMonitor = styled.p`
  display: none;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.c)} {
      display: initial;
      position: absolute;
      left: 20px;
      top: 0;
      width: 5vw;

    }
  `}
`

const Title = styled.h2`
  margin-bottom: 10px;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
      width: 60%;
    }
  `};
`
const Sub = styled.h3`
  margin-bottom: 30px;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
      width: 60%;
    }
  `};
`

const Hero = () => (
  <HeroContainer>
    <BigMonitor>That's a big monitor 👀</BigMonitor>
    <BackgroundImage alt="shapes" src={HeroImage} />
    <Title>Hey I’m Luke,</Title>
    <Sub>
      I’m a <b>Javascript Developer</b>, specialized in
      <b> Frontend Development </b>
      currently based in Manchester 🇬🇧
    </Sub>
    <button type="button">More</button>
  </HeroContainer>
)

export default Hero
