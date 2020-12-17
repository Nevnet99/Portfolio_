import React from 'react'
import { Link } from 'gatsby'
import '../../normalize.css'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import theme from '../styles/theme'
import { minBp } from '../styles/mixins'
import Navbar from './global/Navbar'
import Footer from './global/Footer'

const GlobalStyle = createGlobalStyle`

 @font-face {
    font-family: 'Roboto Condensed';
    src: url('../assets/fonts/Roboto_Condensed/RobotoCondensedRegular.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cabin';
    src: url('../assets/fonts/Cabin/CabinRegular.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

 

  * {
    margin: 0;
    padding: 0;
    ${({ theme }) => `
      color: ${theme.color.text};
    `}
  }





  body {
    ${({ theme }) => `
      position: relative;
      background-color: ${theme.color.background};
      padding: 0 20px;

      ${minBp(theme.breakpoints.c)}{
        padding: 0 150px;
      }
     
    `}
  }

  h1 {
    font-family: 'Roboto Condensed';
    font-weight: 400;
    letter-spacing: -1.5px;
    font-size: 96px;
    margin: 0;
  }

  h2 {
    font-family: 'Roboto Condensed';
    font-weight: 300;
    letter-spacing: -0.5px;
    font-size: 60px;
  }

  h3 {
    font-family: 'Roboto Condensed';
    font-weight: 300;
    letter-spacing: 0px;
    font-size: 48px;
  }

  h4{
    font-family: 'Roboto Condensed';
    font-weight: 300;
    letter-spacing: 0.18px;
    font-size: 34px;
  }

  h5{
    font-family: 'Roboto Condensed';
    font-weight: 300;
    letter-spacing: 0px;
    font-size: 24px;
  }

  h6{
    font-family: 'Roboto Condensed';
    font-weight: 300;
    letter-spacing: 0px;
    font-size: 20px;
  }

  button {
    background: none;
    border: none;
    ${({ theme }) => `
      background: ${theme.color.secondary};
      padding: 5px 15px;
      border-radius: 5px;
      text-transform: uppercase;
      font-family: 'Cabin';
      letter-spacing: 1.5px;
      font-size: 15px;
    `}
  }


  span {
      font-family: 'Cabin';
      letter-spacing: 1.5px;
      font-size: 11px;
  }

  p {
      font-family: 'Cabin';
      letter-spacing: 0.8px;
      font-size: 17px;
      margin-bottom: 30px;
      line-height: 28px;
     
  }

  .code-block {
    margin: 20px 0;
    span {
      font-size: 17px;      
    }

  }

  legend {
    clip: rect(1px 1px 1px 1px); /* IE 6/7 */
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; /* added line */
    width: 1px;
  }

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }


`

export const PageContainer = styled.div`
  ${({ theme }) => `
      max-width: ${theme.maxWidth};
      margin: 0 auto;
  `}
`

const Template = props => {
  const { location, children } = props
  let header

  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = `${__PATH_PREFIX__}/`
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet>
          <html lang="en" />
        </Helmet>
        <GlobalStyle />
        <PageContainer>
          <Navbar {...props} />
          <main>{children}</main>
        </PageContainer>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Template
