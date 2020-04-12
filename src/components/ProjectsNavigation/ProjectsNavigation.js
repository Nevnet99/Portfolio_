import React, { useState } from 'react'
import { Container, NavItem } from './ProjectsNavigation.style'
import Close from '../Buttons/Close'

const ProjectsNavigation = ({ nodes, updateData }) => {
  const filterData = e => {
    const text = e.currentTarget.innerText
    const filteredSet = nodes.filter(
      item => item.technology.toLowerCase() === text.toLowerCase()
    )
    updateData(filteredSet)
  }
  const resetData = () => {
    console.log(nodes, 'NN')
    updateData(nodes)
  }

  return (
    <Container>
      {Array.from([...new Set(nodes.map(x => x.technology))][0]).map(
        (tech, index) => (
          <NavItem key={index} onClick={filterData}>
            {tech}
          </NavItem>
        )
      )}
      <Close eventHandler={resetData} />
    </Container>
  )
}

export default ProjectsNavigation
