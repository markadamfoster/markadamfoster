import React from 'react'
import styled from 'styled-components'

import { Container } from 'styles/Container'

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Hi, I&apos;m Mark.</Title>
        <SubTitle>
          <p>
            I share my love of JavaScript and React with short, easy-to-digest
            articles.
          </p>
        </SubTitle>
      </Container>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  padding: 4vh 0;
`

const Title = styled.h1`
  margin: 0;
  text-align: left;
  font-size: 4rem;
  line-height: 1.25em;
`

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 2rem;
`
