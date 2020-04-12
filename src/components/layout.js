import React from 'react'
import { Link } from 'gatsby'
import '../../normalize.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import Navbar from './Navbar/Navbar'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
    ${({ theme }) => `
      body {
        background-color: ${theme.color.background.default};
        color: ${theme.color.text.default};
        font-family: ${theme.font.default};

      }
      p {
        font-weight: ${theme.font.weight.s};
        font-size: ${theme.font.size.s};
        letter-spacing: 5px;
        text-transform: uppercase;
    }
    h1 {
      font-weight: ${theme.font.weight.l};
      font-size: ${theme.font.size.l};
      letter-spacing: 2px;
    }
    h2 {
      font-weight: ${theme.font.weight.m};
      font-size: ${theme.font.size.m};
      letter-spacing: 5px;
    }

    button {
      background: transparent;
      border: none;
      text-transform: uppercase;
    }
    `}
`
class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = `${__PATH_PREFIX__}/`
    }

    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </>
    )
  }
}

export default Template
