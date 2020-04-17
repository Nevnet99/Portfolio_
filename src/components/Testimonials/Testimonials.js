import React from 'react'
import {
  MainContainer,
  TestimonialContainer,
  Testimonial,
  Author,
} from './Testimonials.style'

const Testimonials = ({ nodes }) => (
  <MainContainer>
    {nodes.map(({ testimonial, author }) => (
      <TestimonialContainer>
        <Testimonial>
          {JSON.parse(testimonial.testimonial).content[0].content[0].value}
          <Author>{` -${author}`}</Author>
        </Testimonial>
      </TestimonialContainer>
    ))}
  </MainContainer>
)

export default Testimonials
