import styled from 'styled-components'
import { minBp } from '../../styles/mixins'

export const Container = styled.div`
  height: 100%;
`

export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
        height: 500px;
    }
    ${minBp(theme.breakpoints.c)} {
        height: 700px;
    }
    `}
`
export const MediaWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
`

export const Background = styled.div`
  ${({ src }) => `
background-image: url(${src});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`}
  height: 100%;
  width: 100%;
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  ${({ theme }) => `
    padding ${theme.padding.m};
    ${minBp(theme.breakpoints.b)} {
        align-items: flex-start;
    }
`}
  text-align: center;
  &::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`

export const Title = styled.h2`
  ${({ theme }) => `
    margin-bottom: ${theme.margin.m};
    ${minBp(theme.breakpoints.b)} {
        margin-left: ${theme.margin.l};
        font-size: ${theme.font.size.l};
    }
`}
`
export const Description = styled.p`
  ${({ theme }) => `
 
   ${minBp(theme.breakpoints.b)} {
        font-size: ${theme.font.size.m};
        margin-left: ${theme.margin.l};
        text-align: left;
        margin-bottom: 200px;
        width: 30%;
    }
`}
`

export const Buttons = styled.div`
  margin: 0 auto;
`

export const Next = styled.button``

export const Prev = styled.button``

export const Lines = styled.div`
  position: absolute;
  bottom: 20px;
  height: 30px;
  li {
    height: 5px;
    top: 0;
    z-index: 50000;
    ${({ theme }) => `
        margin: ${theme.margin.m};
        `}

    button:before {
      content: '';
      width: 40px;
      height: 5px;
      background-color: ${({ theme }) => `${theme.color.accent.a}`};
    }
  }
`