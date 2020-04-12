import React, { useState } from 'react'
import {
  ProjectContainer,
  MainContainer,
  Technology,
  Title,
  MainBut,
  BackgroundImage,
  AnimationContainer,
  MainTitle,
} from './Projects.style'
import ProjectsNavigation from '../ProjectsNavigation/ProjectsNavigation'

const Projects = ({ nodes }) => {
  const [activeData, setActiveData] = useState([...nodes])

  const updateData = dataset => {
    setActiveData(dataset)
  }
  return (
    <MainContainer>
      <MainTitle>Projects</MainTitle>
      <ProjectsNavigation updateData={updateData} nodes={nodes} />
      {activeData.map(
        ({ buttonLink, buttonText, technology, title, image }, index) => (
          <ProjectContainer key={index}>
            <BackgroundImage src={image.fluid.src}></BackgroundImage>
            <Title>{title}</Title>
            <Technology>{technology}</Technology>
            <AnimationContainer>
              <MainBut href={buttonLink}>{buttonText}</MainBut>
            </AnimationContainer>
          </ProjectContainer>
        )
      )}
    </MainContainer>
  )
}

export default Projects
