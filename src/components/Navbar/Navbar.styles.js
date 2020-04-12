import styled from 'styled-components'
import { minBp } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  color: white;
  ${({ theme }) => `
        padding: ${theme.padding.s} 0;
        ${minBp(theme.breakpoints.b)} {
            position: absolute;
            top: 0;
            left: 0;
            width: 95%;
            z-index: 50000;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            padding: ${theme.padding.m} 45px;
        }
    `}
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => `
    ${minBp(theme.breakpoints.b)} {
            justify-content: space-between;
            align-items: center;
            flex-direction: row
        }
        `}
`

export const Title = styled.h2``
