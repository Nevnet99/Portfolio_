import React from 'react'
import {
  Container,
  ContentDiv,
  Img,
  Content,
  Title,
  MainContainer,
} from './AboutMe.style'

const AboutMe = ({ nodes }) => (
  <MainContainer>
    {nodes.map(({ title, content: { content }, sideImg }) => (
      <Container>
        <ContentDiv>
          <Title>{title}</Title>
          <Content>{JSON.parse(content).content[0].content[0].value}</Content>
        </ContentDiv>
        <Img src={sideImg.fluid.src}></Img>
      </Container>
    ))}
  </MainContainer>
)

export default AboutMe
