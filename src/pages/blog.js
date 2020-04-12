import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Lightbulb from '../components/Lightbulb/Lightbulb'

const Hey = styled.h1`
  color: black !important;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15em;
`
const blog = () => (
  <Layout>
    <Hey>Hey who turned on the light !? </Hey>
    <Lightbulb />
  </Layout>
)

export default blog
