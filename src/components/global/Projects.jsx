import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../shared/ProjectCard'

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -10px;
  margin-top: 15px;
`

const Projects = ({ projects: { edges: projects } }) => (
  <>
    <h3 id="projects">Projects</h3>
    <ProjectsContainer>
      {projects.map(({ node: project }) => (
        <ProjectCard key={project.contentful_id} {...project} />
      ))}
    </ProjectsContainer>
  </>
)

export default Projects
