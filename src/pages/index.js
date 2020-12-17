import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import BlogPosts from '../components/global/BlogPosts'
import ContactMe from '../components/global/ContactMe'
import Hero from '../components/global/Hero'
import Projects from '../components/global/Projects'

import Layout from '../components/layout'

const RootIndex = ({ data: { projects, blogPosts } }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Homepage</title>
      <meta property="og:title" content="Luke Brannagan" />
      <meta
        property="og:description"
        content="Luke Brannagan's portfolio featuring projects as well as blog posts."
      />
      <meta property="og:url" content="http://lukebrannagan.com" />
    </Helmet>
    <Hero />
    <Projects projects={projects} />
    <BlogPosts blogPosts={blogPosts} />
    <ContactMe />
  </Layout>
)

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
