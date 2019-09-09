import React, { Component } from 'react'
import styled from 'styled-components'

// assets
import profilePic from 'src/assets/mark-foster.jpg'

class HeaderLarge extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <Image>
            <img src={profilePic} />
          </Image>
          <Text>
            <h1>Mark Foster</h1>
            <p>
              Developer and maker specializing in JavaScript &amp; React. You
              can also find me on{' '}
              <a href="https://twitter.com/markadamfoster">Twitter</a>.
            </p>
          </Text>
        </Content>
      </Wrapper>
    )
  }
}

export default HeaderLarge

const Wrapper = styled.div`
  margin: 100px auto;
  max-width: 95%;

  @media (max-width: 600px) {
    margin: 40px auto;
  }
`

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  width: 700px;
  max-width: 100%;

  @media (max-width: 600px) {
    padding: 0 20px;
    flex-direction: column;
    width: auto;
  }
`

const Image = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: 30px;

  img {
    height: 150px;
    width: 150px;
    border-radius: 100%;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);

    @media (max-width: 830px) {
      height: 120px;
      width: 120px;
    }
  }
`

const Text = styled.div`
  width: 100%;

  @media (max-width: 830px) {
    font-size: 16px;
  }

  h1 {
    margin: 20px 0 0;
    font-size: 72px;
    line-height: 1.1;

    @media (max-width: 830px) {
      font-size: 58px;
    }
  }
`
