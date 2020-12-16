import React from 'react'
import styled from 'styled-components'
import BlogCard from '../shared/BlogCard'

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -10px;
  margin-top: 15px;
`

const BlogPosts = ({ blogPosts: { edges: blogPosts } }) => (
  <>
    <h3 id="blogPosts">Blog Posts</h3>
    <Container>
      {blogPosts.map(({ node: blogPost }) => (
        <BlogCard key={blogPost.contentful_id} {...blogPost} />
      ))}
    </Container>
  </>
)

export default BlogPosts
