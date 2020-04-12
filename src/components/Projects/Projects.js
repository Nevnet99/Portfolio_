import React, { useState } from 'react'
import {
  ProjectContainer,
  MainContainer,
  Technology,
  Title,
  MainBut,
  BackgroundImage,
  AnimationContainer,
} from './Projects.style'
import ProjectsNavigation from '../ProjectsNavigation/ProjectsNavigation'

const Projects = ({ nodes }) => {
  const [activeData, setActiveData] = useState([...nodes])

  const updateData = dataset => {
    setActiveData(dataset)
  }
  return (
    <MainContainer>
      <ProjectsNavigation updateData={updateData} nodes={nodes} />
      {activeData.map(
        ({ buttonLink, buttonText, technology, title, image }, index) => (
          <ProjectContainer key={index}>
            <BackgroundImage src={image.fluid.src}></BackgroundImage>
            <Title>{title}</Title>
            <AnimationContainer>
              <Technology>{technology}</Technology>
              <MainBut href={buttonLink}>{buttonText}</MainBut>
            </AnimationContainer>
          </ProjectContainer>
        )
      )}
    </MainContainer>
  )
}

export default Projects
