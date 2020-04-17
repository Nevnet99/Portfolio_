import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import { minBp } from '../../styles/mixins'

const flicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow:
            -0.2rem -0.2rem 0.8rem #fff,
            0.2rem 0.2rem 0.8rem #fff,
            0 0 2rem #f9ca24,
            0 0 4rem #f9ca24,
            0 0 6rem #f9ca24,
            0 0 8rem #f9ca24,
            0 0 10rem #f9ca24;
    color: #f9ca24;
  }


  20%, 24%, 55% { 
    text-shadow: none;
}
`

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1em;
  font-size: 40px;
  font-weight: 300;
  width: 100%;
  user-select: none;
  animation: ${flicker} linear 2s infinite;
  ${({ isVert }) =>
    isVert
      ? `
        position: fixed;
        right: 2%;
        top: 20%;
        width: unset;
    `
      : ``}

  ${({ theme }) => `
  display: none;
    ${minBp(theme.breakpoints.b)} {
        font-size: 80px;
        display: flex;
    }
    `}
`

const NeonSign = ({ children, isVert }) =>
  !isVert ? (
    <Link to="/portfolio" style={{ textDecoration: 'none' }}>
      <Container>{children}</Container>
    </Link>
  ) : (
    <Link to="/blog">
      <Container isVert>
        {children[0].split('').map(char => (
          <span>{char}</span>
        ))}
        {children[1]}
      </Container>
    </Link>
  )

export default NeonSign
