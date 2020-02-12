import React from 'react'
import styled from 'styled-components'

import { Container } from 'styles/Container'

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <span>Pixel-perfect web development, </span>
          {/* <span>focused on your growth, </span> */}
          <span>on time &amp; on budget.</span>
        </Title>
      </Container>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  background-color: #f8fafc;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.04),
    inset 0 0 5px rgba(0, 0, 0, 0.01), inset 0 5px 22px -8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-size: 6rem;
  line-height: 1.25em;
  text-align: center;
  margin: 7vw 0;

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

  /* @media (max-width: 460px) {
    font-size: 32px;
  } */
`
