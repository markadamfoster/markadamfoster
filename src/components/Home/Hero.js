import React from 'react'
import styled from 'styled-components'

import profilePic from 'assets/mark-foster.png'

const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <Avatar src={profilePic} />
        <Title>Hi, I&apos;m Mark Foster</Title>
        <Description>
          Web developer and creator based in Boise, Idaho{' '}
          <span role="img" aria-label="mountain">
            ⛰
          </span>
        </Description>
      </Content>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
`

const Content = styled.div``

const Avatar = styled.img`
  margin-left: -8px;
  height: 145px;
  width: 145px;

  @media (max-width: 460px) {
    height: 120px;
    width: 120px;
  }
`

const Title = styled.h1`
  text-align: left;
  margin: 0;
  font-size: 54px;

  @media (max-width: 530px) {
    font-size: 48px;
  }

  @media (max-width: 460px) {
    font-size: 32px;
  }
`

const Description = styled.h3`
  font-weight: 400;
  font-size: 18px;
  margin: 0;

  @media (max-width: 720px) {
    max-width: 420px;
  }

  @media (max-width: 460px) {
    font-size: 15px;
  }
`
