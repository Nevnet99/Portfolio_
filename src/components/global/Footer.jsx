import React from 'react'
import styled from 'styled-components'

const HeightWrapper = styled.footer`
  margin: 300px 0;
`
const Container = styled.div`
  p {
    margin-bottom: 0;
  }
  ${({ theme }) => `
    position: absolute;
    bottom: -300px;
    left: 0;
    background-color: ${theme.color.primary};
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0;
`};
`
const Footer = () => (
  <HeightWrapper>
    <Container>
      <p>©️ Luke Brannagan</p>
    </Container>
  </HeightWrapper>
)

export default Footer
