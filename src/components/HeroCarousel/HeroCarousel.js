import React, { useEffect, useRef } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  Container,
  Slide,
  MediaWrapper,
  Background,
  Content,
  Title,
  Description,
  Lines,
} from './HeroCarousel.styles'

const HeroCarousel = ({ allContentfulCarousel: { nodes } }) => {
  const slick = useRef(null)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    appendDots: dots => <Lines>{dots}</Lines>,
  }

  return (
    <Container>
      <Slider arrows={false} ref={slick} {...settings}>
        {nodes.map(
          ({
            title,
            description,
            backgroundImg: {
              fluid: { src },
            },
          }) => (
            <Slide>
              <MediaWrapper>
                <Background src={src} />
              </MediaWrapper>
              <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
              </Content>
            </Slide>
          )
        )}
      </Slider>
    </Container>
  )
}

export default HeroCarousel
