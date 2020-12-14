import React from 'react'
import styled from 'styled-components'
import { minBp } from '../../styles/mixins'

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;

  ${({ theme }) => `
    border-bottom: 1px solid ${theme.color.primary};
    padding-bottom: 20px;

    ${minBp(theme.breakpoints.b)}{
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }
    
`}
`

const ButtonsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 0px;
  overflow: hidden;
  ${({ theme }) => `
        ${minBp(theme.breakpoints.b)}{
            flex-direction: row;
            width: initial;
            height: 100%;
        }
  `}
`

const NavLink = styled.li`
  ${({ theme }) => `
     ${minBp(theme.breakpoints.b)}{
        margin: 0 30px;
     }
  `}

  button {
    background: none;
    position: relative;
    ${({ theme }) => `
          &.active {
            	color: ${theme.color.primary};
              		${minBp(theme.breakpoints.b)} {
                      &::after {
                          content: '';
                          height: 3px;
                          width: 100%;
                          position: absolute;
                          top: -10px;
                          left: 0;
                          background: ${theme.color.primary};
                      }
                    }
                }
      `}
  }
`

const Navbar = () => (
  <NavbarContainer>
    <h5>LUKE BRANNAGAN</h5>
    <ButtonsContainer>
      <NavLink>
        <button type="button">Home</button>
      </NavLink>
      <NavLink>
        <button type="button">Projects</button>
      </NavLink>
      <NavLink>
        <button type="button" className="active">
          Blog
        </button>
      </NavLink>
      <NavLink>
        <button type="button">Contact Me</button>
      </NavLink>
    </ButtonsContainer>
  </NavbarContainer>
)

export default Navbar
