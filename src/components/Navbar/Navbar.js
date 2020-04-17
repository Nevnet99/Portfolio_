import React from 'react'
import { Link } from 'gatsby'
import { ButtonsContainer, Container, Title } from './Navbar.styles'
import NavButton from '../Buttons/NavButton'

function Navbar() {
  return (
    <Container>
      <Title>Luke Brannagan</Title>
      <ButtonsContainer>
        <Link to="/">
          <NavButton>Home</NavButton>
        </Link>
        <Link to="/blog">
          <NavButton>Blog</NavButton>
        </Link>
        <Link to="/portfolio">
          <NavButton>Portfolio</NavButton>
        </Link>
      </ButtonsContainer>
    </Container>
  )
}

export default Navbar
