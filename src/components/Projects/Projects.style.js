import styled, { keyframes } from 'styled-components'
import { MainButton } from '../Buttons/MainButton'
import { minBp } from '../../styles/mixins'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  ${({ theme }) => `
  margin: ${theme.margin.m} auto;
  ${minBp(theme.breakpoints.b)} {
       flex-direction: row;
       justify-content: center;
       align-items: flex-start;
       flex-wrap: wrap;
       width: 70%;
    }
  `}
`
export const MainTitle = styled.h2`
  width: 100%;
  text-align: center;
  ${({ theme }) => `
    margin-bottom: ${theme.margin.l};
  `}
`

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 0 15px 7px #fff, 0 0 25px 15px #333, 0 0 35px 23px #fef;
    transform: scale(1.1);
  }

  ${({ theme }) => `
  padding: ${theme.padding.m};
  ${minBp(theme.breakpoints.b)} {
       width: 28%
    }
  `}
`

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  filter: brightness(0.4);
  ${({ theme, src }) => `
    background-image: url(${src});
  `}
`

export const Title = styled.h2`
  text-align: center;
  ${({ theme }) => `
    margin-bottom: ${theme.margin.s};
  `}
`

export const Technology = styled.p`
  text-align: center;
`

export const MainBut = styled(MainButton)`
  position: absolute;
  bottom: 30px;
  left: 35%;
`

export const AnimationContainer = styled.div`
  transition: opacity 0.2s;
  opacity: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  min-height: 250px;
  position: relative;
  &:hover {
    display: unset;
    opacity: 1;
  }
`
