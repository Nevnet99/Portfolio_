import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PortfolioHero from '../components/PortfolioHero/PortfolioHero'
import PortfolioStatistics from '../components/PortfolioStatistics/PortfolioStatistics'
import Projects from '../components/Projects/Projects'

const Portfolio = ({ data }) => {
  console.log('PAGE QUERY', data)
  const {
    contentfulPortfolioHero,
    allContentfulPortfolioStatistics,
    allContentfulProjectItem,
  } = data
  return (
    <Layout>
      <PortfolioHero {...contentfulPortfolioHero} />
      <Projects {...allContentfulProjectItem} />
      <PortfolioStatistics {...allContentfulPortfolioStatistics} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PortfolioQuery {
    contentfulPortfolioHero {
      id
      description
      backgroundImg {
        fluid {
          src
        }
      }
      title
    }
    allContentfulProjectItem {
      nodes {
        buttonLink
        buttonText
        technology
        title
        image {
          title
          fluid {
            src
          }
        }
      }
    }
    allContentfulPortfolioStatistics {
      nodes {
        stat
        title
      }
    }
  }
`

export default Portfolio
