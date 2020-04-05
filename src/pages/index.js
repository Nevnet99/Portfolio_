import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HeroCarousel from '../components/HeroCarousel'


const RootIndex = ({data}) => {
  console.log(data);
  return (
    <Layout>
      <HeroCarousel {...data} />
       <h1>Hello</h1>
    </Layout>
  )
}

export default RootIndex;

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



