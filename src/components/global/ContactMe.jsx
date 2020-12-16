import React, { useState } from 'react'
import styled from 'styled-components'
import { minBp } from '../../styles/mixins'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
        flex-direction: row;
    }
`};

  a {
    background: none;
    border: none;
    text-decoration: none;
    margin: 0 auto;
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
`

const ContactMe = () => (
  <Container id="contactMe">
    <a href="mailto:luke-brannagan@hotmail.com?subject=MESSAGE_FROM_PORTFOLIO">
      Contact Me 🚀
    </a>
  </Container>
)

export default ContactMe
