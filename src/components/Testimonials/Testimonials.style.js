import styled from 'styled-components'
import { minBp } from '../../styles/mixins'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  ${({ theme }) => `
    margin: ${theme.margin.l} 0;
    

    ${minBp(theme.breakpoints.b)} {
        flex-direction: row;
        margin: ${theme.margin.l} 0;
        padding: ${theme.padding.l};
        flex-wrap: wrap;
    }
  `}
`

export const TestimonialContainer = styled.div`
  ${({ theme }) => `
    margin: ${theme.margin.l} ${theme.margin.l};
    ${minBp(theme.breakpoints.b)} {
        width: 35%;
    }
  `}
`

export const Testimonial = styled.p``

export const Author = styled.p``
