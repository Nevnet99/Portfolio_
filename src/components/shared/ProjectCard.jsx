import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import handleRichText from './RichText'

export const Container = styled.div`
  margin: 10px;
`

export const Title = styled.h3``

export const PublishedAt = styled.p``

export const FadingRichText = styled.div``

const ProjectCard = ({
  contentful_id: id,
  headerImage,
  published,
  richText: { json },
  title,
}) => (
  <Link to={`/project/${id}`}>
    <Container>
      <Img fluid={headerImage.fluid} />
      <Title>{title}</Title>
      <PublishedAt>{published}</PublishedAt>
    </Container>
  </Link>
)

export default ProjectCard
