import { graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="https://www.lukebrannagan.com/blog/" />
        <meta
          property="og:title"
          content={`Luke Brannagan's Portfolio: Blog post - ${title}`}
        />
        <meta property="og:image" content={`${img.url}`} />
        <meta property="og:url" content="http://lukebrannagan.com" />
      </Helmet>
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
