import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  ${({ theme }) => `
    padding: ${theme.padding.l};
  `}
`

export const NavItem = styled.button`
  color: white;
  ${({ theme }) => `
    margin: 0 ${theme.margin.l};
`}
`
