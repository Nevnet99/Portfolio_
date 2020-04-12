import styled from 'styled-components'
import { minBp } from '../../styles/mixins'

export const MainContainer = styled.div`
  width: 100%;
  text-align: center;
  ${({ theme }) => `
  margin: ${theme.margin.l} 0;
  ${minBp(theme.breakpoints.b)} {
    width: 70%;
    text-align: left;
    margin: 150px auto;
  }
`}
`
export const Container = styled.div`
  ${({ theme }) => `
  ${minBp(theme.breakpoints.b)} {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      margin: 0 auto;
  }
`}
`

export const Img = styled.img`
  display: none;
  ${({ theme }) => `
  ${minBp(theme.breakpoints.b)} {
      display: unset;
      width: 45%;
      height: 400px;
  }
`}
`

export const ContentDiv = styled.div`
  width: 100%;
`

export const Content = styled.p``

export const Title = styled.h2`
  ${({ theme }) => `
  margin-bottom: ${theme.margin.l};
  ${minBp(theme.breakpoints.b)} {
 
  }
`}
`
