import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import handleRichText from './RichText'
import { minBp } from '../../styles/mixins'

export const LinkStyled = styled(Link)`
  width: 100%;
  ${({ theme }) => `
  ${minBp(theme.breakpoints.b)} {
    width: 33%;
  }
`}
  text-decoration: none;
`
export const Container = styled.div`
  margin: 10px;
  position: relative;

  &:hover {
    h4 {
      opacity: 1;
    }
  }
`

export const Title = styled.h4`
  opacity: 1;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: opacity 0.4s;
  ${({ theme }) => `
      ${minBp(theme.breakpoints.c)} {
        opacity: 0;
      }
  `}
`

export const PublishedAt = styled.p`
  width: 100%;
  text-align: right;
  margin-top: 10px;
`

const ProjectCard = ({ contentful_id: id, headerImage, published, title }) => (
  <LinkStyled to={`/project/${id}`}>
    <Container>
      <Img fluid={headerImage.fluid} />
      <Title>{title}</Title>
      <PublishedAt>{published}</PublishedAt>
    </Container>
  </LinkStyled>
)

export default ProjectCard
