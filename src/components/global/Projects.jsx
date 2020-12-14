import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../shared/ProjectCard'

const ProjectsContainer = styled.div`
  display: flex;
  margin: 0px -10px;
  margin-top: 15px;
`

const Projects = ({ projects: { edges: projects } }) => {
  console.log(projects, 'PJECTS')
  return (
    <>
      <h3>Projects</h3>
      <ProjectsContainer>
        {projects.map(({ node: project }) => {
          console.log(project, 'PPP')

          return <ProjectCard {...project} />
        })}
      </ProjectsContainer>
    </>
  )
}

export default Projects
