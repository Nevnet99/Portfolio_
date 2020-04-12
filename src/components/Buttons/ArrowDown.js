import React from 'react'
import styled from 'styled-components'
import arrowdownIcon from '../../../static/img/arrow-down.svg'
import { minBp } from '../../styles/mixins'

const Container = styled.div`
  ${({ theme }) => `
  display: none;
  ${minBp(theme.breakpoints.b)} {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  bottom: 100px;
  right: 100px;

  &:hover {
    transition: 0.2s all;
    transform: translateY(5px);
  }
  &:active {
    transform: translateY(9px);
  }
        display: unset;
      }
  `}
`
const Button = styled.button``

const Icon = styled.img`
  ${({ height, width }) => `
    height: ${height}px;
    width: ${width}px;
`}
  cursor: pointer;
`

const ArrowDown = ({ height, width }) => (
  <Container>
    <Button>
      <Icon
        height={height || '16px'}
        width={width || '16px'}
        src={arrowdownIcon}
      />
    </Button>
  </Container>
)

export default ArrowDown
