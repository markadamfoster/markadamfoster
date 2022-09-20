import React from 'react'
import styled from 'styled-components'

import profileImg from 'assets/Mark_Foster_Freelance_Develper.png'
import Emoji from '../Shared/Emoji'

export default function Hero() {
  return (
    <Wrapper>
      <TextCol>
        <Title>
          Hey, I&apos;m Mark <Emoji emoji="👋" label="waving hello" />
        </Title>

        <Subhead>
          <p>
            I&apos;m a software developer specializing in React and React
            Native. Welcome to my digital garden.{' '}
            <Emoji emoji="🌱" label="seedling" />
          </p>
          <p>
            Along with crafting software, I enjoy building side projects,
            cycling, skiing, and working on our home in the North End of Boise,
            Idaho. <Emoji emoji="⛰" label="mountain" />
          </p>
        </Subhead>
      </TextCol>

      <Img src={profileImg} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 100px 0;

  @media (max-width: 620px) {
    flex-direction: column-reverse;
    margin: 50px 0;
  }
`

const TextCol = styled.div`
  margin-bottom: 2rem;
  flex: 1;
`

const Title = styled.h1`
  margin-top: 0;
  font-size: 3rem;
  text-align: left;

  @media (max-width: 690px) {
    font-size: 2.5rem;
  }

  @media (max-width: 450px) {
    font-size: 2rem;
  }
`

const Subhead = styled.h3`
  max-width: 600px;
  margin-top: 1.25rem;
  line-height: 2rem;
  font-size: 1.25rem;
  font-weight: 400;

  p {
    margin-bottom: 20px;
  }

  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
`

const Img = styled.img`
  height: 240px;
  width: 240px;
  flex-shrink: 0;
  margin-left: 30px;

  @media (max-width: 620px) {
    margin-left: -10px;
    height: 180px;
    width: 180px;
  }
`
