import React from 'react'
import styled from 'styled-components'

import profileImg from 'assets/mark_foster.jpg'
import { Container } from 'styles/Container'

const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <Img src={profileImg} />

        <div>
          <Title>Hi, I&apos;m Mark.</Title>
          <SubTitle>
            I share my love of JavaScript and React with short,
            easy&#8209;to&#8209;digest articles.
          </SubTitle>
        </div>
      </Content>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  padding: 12vh 0;
`

const Content = styled(Container)`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const Img = styled.img`
  height: 120px;
  width: 120px;
  margin-right: 30px;
  border-radius: 100%;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 500px) {
    margin: 0;
  }
`

const Title = styled.h1`
  margin: 0;
  text-align: left;
  font-size: 4rem;
  line-height: 1.25em;

  @media (max-width: 500px) {
    margin-top: 18px;
    text-align: center;
  }
`

const SubTitle = styled.p`
  margin: 10px 0 0;
  font-weight: 400;
  font-size: 2rem;

  @media (max-width: 890px) {
    font-size: 1.8rem;
  }

  @media (max-width: 500px) {
    text-align: center;
  }
`
