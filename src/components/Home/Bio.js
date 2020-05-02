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
          <Title>
            Hi, I&apos;m Mark{' '}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </Title>
          <Text>
            <p>
              I am a software developer specializing in JavaScript and React.
            </p>
            <p>
              My current focus is pushing further into the depths of JavaScript
              and ReactJS, and teaching what I learn along the way.
            </p>
            <p>
              I also build indie products, including{' '}
              <a href="https://www.photoinvoice.com">Photo Invoice</a>, an
              invoicing platform for photographers.
            </p>
          </Text>
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
    margin: 0;
  }
`

const Title = styled.h1`
  margin: 0;
  text-align: left;
  font-size: 3rem;
  line-height: 1.25em;

  @media (max-width: 540px) {
    margin-top: 18px;
  }
`

const Text = styled.div`
  margin: 10px 0 0;
  font-weight: 400;
  max-width: 550px;
  line-height: 1.8;

  @media (max-width: 890px) {
    font-size: 1.8rem;
  }

  @media (max-width: 540px) {
    font-size: 1.6rem;
  }
`
