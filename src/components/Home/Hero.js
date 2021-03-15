import React from 'react'
import styled from 'styled-components'

import profileImg from 'assets/Mark_Foster_Freelance_Develper.png'

export default function Hero() {
  return (
    <div className="py-10 sm:py-20 lg:py-32">
      <Img src={profileImg} />

      <div>
        <h1 className="text-left text-5xl mt-0 max-w-xl leading-14">
          Looking for a Freelance React Developer?
        </h1>

        <div className="text-base sm:text-lg lg:text-xl">
          <p className="mt-5 leading-8">
            Hi, I&apos;m Mark- a software engineer and freelance developer. I
            build custom custom apps and websites for companies, startups, and
            just for fun.
          </p>
        </div>
      </div>

      <button className="bg-maf-teal text-white px-6 py-3 mt-6 rounded-md">
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
