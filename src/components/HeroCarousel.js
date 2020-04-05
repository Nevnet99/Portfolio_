import React from 'react';
import styled from "styled-components";


const Container = styled.div``;

const Slide = styled.div`

${({theme}) => `background-color: ${theme.color.a};
`}`;

function HeroCarousel({allContentfulCarousel: {nodes}}) {
    return (
        <Container>
            {/* For some reason Contentful or GraphQL do the opposite order ??? */}
            {nodes.reverse().map(({title, description, backgroundImg: {fluid: {src}}}) => 
                <Slide>
                <h1>{title}</h1>
                <p>{description}</p>
                <img src={src} style={{height: "200px", width: "200px"}}/>
                </Slide>
            )}
        </Container>
    )
}

export default HeroCarousel;
