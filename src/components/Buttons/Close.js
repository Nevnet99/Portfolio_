import React from 'react'
import styled from 'styled-components'
import closeIcon from '../../../static/img/close.svg'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`
const Button = styled.button``

const Icon = styled.img`
  ${({ height, width }) => `
    height: ${height}px;
    width: ${width}px;
`}
  cursor: pointer;
`

const Close = ({ height, width, eventHandler }) => (
  <Container onClick={eventHandler}>
    <Button>
      <Icon height={height || '16px'} width={width || '16px'} src={closeIcon} />
    </Button>
  </Container>
)

export default Close
