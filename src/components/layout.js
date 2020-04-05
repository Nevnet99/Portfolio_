import React from 'react'
import { Link } from 'gatsby'
import "../../normalize.css";
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "../styles/theme";


const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }
`
class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <main>{children}</main>
        </ThemeProvider>
      </>

    )
  }
}

export default Template
