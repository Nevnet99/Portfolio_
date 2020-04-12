import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: transparent;
  border: none;
  ${({ theme }) => `
    margin: ${theme.margin.s} ${theme.margin.m};
    color: ${theme.color.text.default};
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.2s color;

        &:hover {
            color:  ${theme.color.accent.a};
          &::after {
            content: "";
            color: ${theme.color.accent.a};
            height: 5px;
            width: 20px;
            position: absolute;
            bottom: 0;
          }
        }
    `}
`

const NavButton = ({ children }) => <Button>{children}</Button>

export default NavButton
