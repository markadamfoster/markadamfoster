import React from 'react'
import styled from 'styled-components'
import { animateScroll } from 'react-scroll'

import profileImg from 'assets/Mark_Foster_Freelance_Develper.png'
import { PrimaryButton } from 'styles/Buttons'

export default function Hero() {
  const scrollToBottom = () => {
    animateScroll.scrollToBottom()
  }

  return (
    <div className="py-10 sm:py-20 lg:py-32">
      <Img src={profileImg} />

      <TextWrapper>
        <h1 className="text-left text-5xl mt-0 max-w-xl leading-14">
          Looking for a Freelance React Developer?
        </h1>

        <Subhead>
          I&apos;m Mark, an experienced React developer ready to build your next
          custom app.{' '}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </Subhead>
      </TextWrapper>

      <PrimaryButton onClick={scrollToBottom}>Work with me</PrimaryButton>
    </div>
  )
}

const Subhead = styled.h3`
  margin-top: 1.25rem;
  line-height: 2rem;
  font-size: 1.25rem;
  font-weight: 400;
`

const Img = styled.img`
  height: 240px;
  width: 240px;
  flex-shrink: 0;
  margin-left: -15px;

  @media (max-width: 540px) {
    margin-bottom: 20px;
  }
`

const TextWrapper = styled.div`
  margin-bottom: 2rem;
`
