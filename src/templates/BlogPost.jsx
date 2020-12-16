import { graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Template from '../components/layout'
import handleRichText from '../components/shared/RichText'
import { minBp } from '../styles/mixins'

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 150px;
  margin-bottom: 20px;

  h4 {
    margin-right: auto;
    ${({ theme }) => `
      ${minBp(theme.breakpoints.b)} {
        width: 60%;
      } 
    `};
  }

  p {
    margin-right: 20px;
    margin-bottom: 0;
  }
`

export const PageContainer = styled.div`
  max-width: 680px;
  margin: 0 auto;
  .gatsby-image-wrapper {
    margin-bottom: 20px;
  }
`

const BlogPost = props => {
  const blogPost = props.data.allContentfulBlogPost.edges[0].node
  const {
    title,
    imageHeader: { fluid: img },
    published,
    richText: { json },
  } = blogPost
  return (
    <Template blogPage>
      <PageContainer>
        <TitleContainer>
          <h4>{title}</h4>
          <p>{published}</p>
        </TitleContainer>
        <Img fluid={img} />

        {handleRichText(json)}
      </PageContainer>
    </Template>
  )
}
export const query = graphql`
  query BlogPostQuery($id: String) {
    allContentfulBlogPost(filter: { contentful_id: { eq: $id } }) {
      edges {
        node {
          title
          published(fromNow: true)
          contentful_id
          imageHeader {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          richText: childContentfulBlogPostContentRichTextNode {
            json
          }
        }
      }
    }
  }
`

export default BlogPost
