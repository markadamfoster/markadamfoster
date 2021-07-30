import React from 'react'
import styled from 'styled-components'
import { animateScroll } from 'react-scroll'

import profileImg from 'assets/Mark_Foster_Freelance_Develper.png'

export default function Hero() {
  const scrollToBottom = () => {
    animateScroll.scrollToBottom()
  }

  return (
    <div className="py-10 sm:py-20 lg:py-32">
      <Img src={profileImg} />

      <div>
        <h1 className="text-left text-5xl mt-0 max-w-xl leading-14">
          Looking for a Freelance React Developer?
        </h1>

        <div className="text-base sm:text-lg lg:text-xl">
          <p className="mt-5 leading-8">
            I&apos;m Mark, an experienced React and React Native software
            engineer, ready to build your next big website or custom app.{' '}
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </p>
        </div>
      </div>

      <button
        className="bg-maf-teal text-white px-6 py-3 mt-6 rounded-md"
        onClick={scrollToBottom}
      >
        Work with me
      </button>
    </div>
  )
}

const Img = styled.img`
  height: 240px;
  width: 240px;
  flex-shrink: 0;
  margin-left: -15px;

  @media (max-width: 540px) {
    margin-bottom: 20px;
  }
`
