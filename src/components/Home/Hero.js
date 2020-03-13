import React from 'react'
import styled from 'styled-components'

import { Container } from 'styles/Container'

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          Web developer and software engineer specializing in JavaScript and
          React.
        </Title>
      </Container>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-size: 5.8rem;
  line-height: 1.25em;
  text-align: center;
  margin: 6vw 0 4vw;

  span {
    display: block;

    @media (max-width: 540px) {
      display: inline;
    }
  }

  @media (max-width: 900px) {
    font-size: 42px;
  }

  @media (max-width: 700px) {
    font-size: 32px;
  }

  @media (max-width: 540px) {
    font-size: 24px;
  }
`
