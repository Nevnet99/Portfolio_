import React, { useEffect, useRef, useState } from 'react'

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
  MiniCarousel,
} from './HeroCarousel.styles'

const HeroCarousel = ({ allContentfulCarousel: { nodes } }) => {
  const slick = useRef(null)
  const slick2 = useRef(null)

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

  const settings2 = {
    vertical: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    focusOnSelect: false,
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
      <MiniCarousel>
        <Slider
          {...settings2}
          asNavFor={slick}
          ref={slick2}
          slidesToShow={nodes.length}
          focusOnSelect={false}
          swipeToSlide
        >
          {nodes.map(
            (
              {
                title,
                description,
                backgroundImg: {
                  fluid: { src },
                },
              },
              index
            ) => (
              <Slide isMini onClick={() => slick.current.slickGoTo(index)}>
                <MediaWrapper isMini>
                  <Title isMini>{title}</Title>
                  <Background src={src} />
                </MediaWrapper>
              </Slide>
            )
          )}
        </Slider>
      </MiniCarousel>
    </Container>
  )
}

export default HeroCarousel
