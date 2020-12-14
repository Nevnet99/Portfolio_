import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Hero from '../components/global/Hero'
import Projects from '../components/global/Projects'

import Layout from '../components/layout'

const RootIndex = ({ data: { projects } }) => {
  console.log(projects, 'DATA')
  return (
    <Layout>
      <Hero />
      <Projects projects={projects} />
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
  }
`

export default RootIndex
