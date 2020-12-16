import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import BlogPosts from '../components/global/BlogPosts'
import ContactMe from '../components/global/ContactMe'
import Hero from '../components/global/Hero'
import Projects from '../components/global/Projects'

import Layout from '../components/layout'

const RootIndex = ({ data: { projects, blogPosts } }) => {
  console.log(projects, 'DATA')
  return (
    <Layout>
      <Hero />
      <Projects projects={projects} />
      <BlogPosts blogPosts={blogPosts} />
      <ContactMe />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    projects: allContentfulProject {
      edges {
        node {
          title
          published(fromNow: true)
          featured
          contentful_id
          headerImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          richText: childContentfulProjectContentRichTextNode {
            json
          }
        }
      }
    }

    blogPosts: allContentfulBlogPost {
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

export default RootIndex
