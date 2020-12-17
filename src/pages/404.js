import React from 'react'
import styled from 'styled-components'
import Template from '../components/layout'
import { minBp } from '../styles/mixins'
import Frog from '../assets/img/frog.jpg'

const Container = styled.div`
  margin-top: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 400px;
    margin-bottom: 40px;
  }
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 20px;
    width: 50%;
    text-align: center;
  }
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

  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
        margin-top: 200px;
    }
  `};
`
const fourOFour = () => (
  <Template noFooter>
    <Container>
      <h2>404</h2>
      <img src={Frog} alt="The frog wizard" />
      <h3>
        Looks like you took a wrong turn, I can teleport you back below 🔮
      </h3>
      <a href="/">Take me Home</a>
    </Container>
  </Template>
)

export default fourOFour
