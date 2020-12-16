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
  ${minBp(theme.breakpoints.c)} {
    width: 25%;
  }
`}

  text-decoration: none;
`

const BlogCardContainer = styled.div`
  margin: 10px;
`

const Title = styled.h4`
  margin: 15px 0;
`

const PublishedAt = styled.p``

const HideText = styled.div`
  height: 160px;
  margin-bottom: 15px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(247, 247, 247, 0) 100%
    );
  }
`

const BlogCard = ({
  title,
  published,
  contentful_id,
  imageHeader: { fluid },
  richText: { json },
}) => (
  <LinkStyled to={`/blog/${contentful_id}`}>
    <BlogCardContainer>
      <Img fluid={fluid} />
      <Title>{title}</Title>
      <HideText>{handleRichText(json)[0]}</HideText>
      <PublishedAt>{published}</PublishedAt>
    </BlogCardContainer>
  </LinkStyled>
)

export default BlogCard
