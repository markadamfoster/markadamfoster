import React from 'react'
import styled from 'styled-components'

import profileImg from 'assets/mark_foster.jpg'

const Bio = () => {
  return (
    <div className="py-10 sm:py-20 lg:py-">
      <div className="container flex flex-col sm:flex-row">
        <Img src={profileImg} />

        <div>
          <h1 className="text-left text-3xl mt-0">
            Hi, I&apos;m Mark
            <span role="img" aria-label="waving hand" className="ml-2">
              👋
            </span>
          </h1>

          <div className="leading-relaxed text-base sm:text-lg lg:text-xl">
            <p className="mt-5">
              I&apos;m a software engineer specializing in building custom web
              and mobile apps in React and React Native.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio

const Wrapper = styled.div`
  padding: 10vh 0 8vh;

  @media (max-width: 540px) {
    padding: 6vw 0;
  }
`

const Img = styled.img`
  height: 120px;
  width: 120px;
  flex-shrink: 0;
  margin-right: 30px;
  border-radius: 100%;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 540px) {
    margin-bottom: 20px;
  }
`
