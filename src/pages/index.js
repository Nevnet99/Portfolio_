import React from 'react'
import Helmet from 'react-helmet'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import Layout from '../components/layout'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import NeonSign from '../components/NeonSign/NeonSign'

const RootIndex = ({ data }) => (
  <Layout>
    <HeroCarousel {...data} />
    <NeonSign>
      Portfolio
      <FiChevronDown />
    </NeonSign>
    <NeonSign isVert>
      Blog
      <FiChevronRight />
    </NeonSign>
  </Layout>
)

export default RootIndex

export const pageQuery = graphql`
  query MyQuery {
    allContentfulCarousel {
      nodes {
        title
        description
        backgroundImg {
          fluid {
            src
          }
        }
      }
    }
  }
`
