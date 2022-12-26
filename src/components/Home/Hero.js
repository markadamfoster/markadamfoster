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
            I&apos;m a developer and maker, building primarily with JavaScript
            and React. Welcome to my digital garden.{' '}
            <Emoji emoji="🌱" label="seedling" />
          </p>
          <p>
            Along with crafting software, I enjoy house projects, MTB and gravel
            cycling, skiing, and splitting time between the corn fields of Iowa
            and the mountains of Idaho. <Emoji emoji="⛰" label="mountain" />
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
