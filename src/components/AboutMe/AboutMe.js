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
    {nodes.map(({ title, content, src }) => (
      <Container>
        <Title>{title}</Title>
        <ContentDiv>
          <Content>{content}</Content>
        </ContentDiv>
        <Img src={src}></Img>
      </Container>
    ))}
  </MainContainer>
)

export default AboutMe
