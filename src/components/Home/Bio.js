import React from 'react'
import styled from 'styled-components'

import profileImg from 'assets/mark_foster.jpg'
import { Container } from 'styles/Container'

const Bio = () => {
  return (
    <Wrapper>
      <Content>
        <Img src={profileImg} />

        <div>
          <h1 className="text-left text-3xl">
            Hi, I&apos;m Mark
            <span role="img" aria-label="waving hand" className="ml-2">
              👋
            </span>
          </h1>

          <div className="leading-relaxed text-base lg:text-lg">
            <p className="mt-5">
              I am a software developer specializing in JavaScript and React.
            </p>
            <p className="mt-5">
              My current focus is pushing further into the depths of JavaScript
              and ReactJS, and teaching what I learn along the way.
            </p>
            <p className="mt-5">
              I also build indie products, including{' '}
              <a href="https://www.photoinvoice.com">Photo Invoice</a>, an
              invoicing platform for photographers.
            </p>
          </div>
        </div>
      </Content>
    </Wrapper>
  )
}

export default Bio

const Wrapper = styled.div`
  padding: 10vh 0 8vh;

  @media (max-width: 540px) {
    padding: 6vw 0;
  }
`

const Content = styled(Container)`
  display: flex;

  @media (max-width: 540px) {
    flex-direction: column;
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
