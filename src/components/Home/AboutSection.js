import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import picSrc from 'assets/mark_foster-react-developer.jpg'

export default function AboutSection() {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={picSrc} />
      </ImgWrapper>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim
        commodo odio sed tempus. Aenean vel lectus sem. Proin velit massa,
        bibendum ac tristique ut, interdum ut nisi.
        <ReadMore to="/about">Read more about my story →</ReadMore>
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 200px;
  margin: 64px -60px;
  background-color: var(--teal);
  display: flex;
  align-items: center;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);

  @media (max-width: 680px) {
    height: auto;
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }
`

const ImgWrapper = styled.div`
  height: 200px;
  width: 360px;
  flex-shrink: 0;
  margin-right: 20px;

  @media (max-width: 680px) {
    height: auto;
    width: 40%;
    margin-left: 50px;
    border-radius: 20px;
    overflow: hidden;
  }

  @media (max-width: 550px) {
    width: calc(100% - 120px);
    margin: 20px auto 0;
  }
`

const Img = styled.img``

const Text = styled.div`
  color: white;
  padding: 20px;
  font-size: 18px;

  @media (max-width: 900px) {
    padding-right: 50px;
  }

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 550px) {
    width: calc(100% - 120px);
    margin: 10px auto 20px;
    padding: 0;
  }
`

const ReadMore = styled(Link)`
  color: white !important;
  font-weight: 900;
  margin-top: 20px;
  display: block;

  @media (max-width: 550px) {
    text-align: center;
  }
`
