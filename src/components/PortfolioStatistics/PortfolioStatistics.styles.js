import styled from 'styled-components'
import { animated } from 'react-spring'
import { minBp } from '../../styles/mixins'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  ${({ theme }) => `
 
    ${minBp(theme.breakpoints.b)} { 
      width: 70%;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-direction: row;
      margin: ${theme.margin.l} auto;
      padding: ${theme.padding.l};
    }
  `}
`

export const Container = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  ${({ theme }) => `
    margin: ${theme.margin.m} auto;
    ${minBp(theme.breakpoints.b)} { 
      margin: 0;
    }
  `}
`
export const Stat = styled(animated.p)`
  font-size: 35px;
`

export const Title = styled.p`
  width: 95%;
  text-align: center;
`
