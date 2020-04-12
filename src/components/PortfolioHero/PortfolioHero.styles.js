import styled from 'styled-components'
import ArrowDown from '../Buttons/ArrowDown'
import { minBp } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 75vh;
  z-index: 1;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
       height: 100vh;
    }
  `}
`

export const ImgBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${({ src }) => src});
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  background-size: cover;
  background-repeat: no-repeat;
  height: 75vh;
  z-index: -1;
  opacity: 0.8;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
        height: 100vh;
      }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => `
    margin: ${theme.margin.l};
`}
`

export const Description = styled.p`
  text-align: center;
  ${({ theme }) => `
      ${minBp(theme.breakpoints.b)} {
       
      }
  `}
`

export const StyledArrowDown = styled(ArrowDown)``
