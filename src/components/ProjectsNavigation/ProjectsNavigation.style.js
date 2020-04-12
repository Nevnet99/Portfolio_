import styled from 'styled-components'
import { minBp } from '../../styles/mixins'

export const Container = styled.div`
  display: none;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 92%;
    margin: 0 auto;
    padding: ${theme.padding.m};
      }
  `}
`

export const NavItem = styled.button`
  color: white;
  ${({ theme }) => `
    margin: 0 ${theme.margin.l};
`}
`
