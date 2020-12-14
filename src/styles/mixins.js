import { css } from 'styled-components'

export const minBp = breakpoint => `@media (min-width: ${breakpoint}px)`

export const gridWidth = () => css`
  margin: 0px 20px;

  ${({ theme }) => `
  max-width: ${theme.maxWidth};
  
  ${minBp(theme.breakpoints.a)} {
      margin: 0px 10%;

  }

  ${minBp(theme.breakpoints.b)} {
      margin: 0px 10%;

  }

  
  ${minBp(theme.breakpoints.c)} {
    margin: 0px 15%;
   }
   

  `}
`

export const variableSpacing = () => css`
  ${({ theme }) => `
  padding-top: 30px;
  
  ${minBp(theme.breakpoints.a)} {
      padding-top: 50px;

  }

  ${minBp(theme.breakpoints.b)} {
      padding-top: 100px;

  }
  `}
`
