import React from 'react'
import { ButtonsContainer, Container, Title } from './Navbar.styles'
import NavButton from '../Buttons/NavButton'

function Navbar() {
  return (
    <Container>
      <Title>Luke Brannagan</Title>
      <ButtonsContainer>
        <NavButton>Test 1</NavButton>
        <NavButton>Test 1</NavButton>
        <NavButton>Test 1</NavButton>
        <NavButton>Test 1</NavButton>
      </ButtonsContainer>
    </Container>
  )
}

export default Navbar
