import React from 'react'
import styled from 'styled-components'

// assets
import profilePic from 'src/assets/mark-foster.jpg'
import blob from 'src/assets/blob.png'
import imac from 'src/assets/imac.png'

const Hero = () => {
  return (
    <Wrapper>
      <Blob src={blob} />
      <Content>
        <NameArea>
          <Avatar src={profilePic} />
          <Title>Mark Foster</Title>
          <Description>
            Software developer. Websites and apps built with React, React
            Native, and WordPress.
          </Description>
        </NameArea>

        <ImageArea>
          <img src={imac} />
        </ImageArea>
      </Content>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow-y: hidden;
`

const Blob = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 52%;
  height: 500px;
  z-index: 1;

  @media (max-width: 920px) {
    height: 420px;
  }

  @media (max-width: 740px) {
    height: 320px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

const Content = styled.div`
  position: relative;
  padding-top: 80px;
  margin: 0 auto;
  display: flex;
  width: 1200px;
  max-width: 94%;
  z-index: 10;

  @media (max-width: 1050px) {
    padding-top: 40px;
  }
`

const NameArea = styled.div`
  flex: 1;
  width: 50%;
  margin-right: 20px;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }
`

const Avatar = styled.img`
  height: 145px;
  width: 145px;
  border-radius: 100%;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 930px) {
    height: 140px;
    width: 140px;
  }

  @media (max-width: 860px) {
    height: 120px;
    width: 120px;
  }

  @media (max-width: 740px) {
    height: 100px;
    width: 100px;
  }
`

const Title = styled.h1`
  text-align: left;
  margin: 15px 20px 10px 0;
  font-size: 100px;
  line-height: 1;

  @media (max-width: 920px) {
    font-size: 80px;
  }

  @media (max-width: 740px) {
    font-size: 46px;
  }
`

const Description = styled.h3`
  font-family: Lato, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin-right: 40px;
  max-width: 400px;

  @media (max-width: 920px) {
    font-size: 16px;
  }

  @media (max-width: 750px) {
    margin-right: 0;
  }
`

const ImageArea = styled.div`
  position: relative;
  width: 50%;
  flex: 1;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 600px) {
    display: none;
  }

  img {
    max-height: 440px;
    max-width: 100%;
    display: block;
    margin: 0 auto 10px;

    @media (max-width: 600px) {
      display: none;
    }
  }
`
