import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

// assets
import profilePic from 'src/assets/mark-foster.jpg'
import { colors } from 'src/Constants'

class MainPageHeader extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <Link to="/">
            <Logo>
              <Image>
                <img src={profilePic} />
              </Image>
              <Text>
                <Name>Mark Foster</Name>
              </Text>
            </Logo>
          </Link>
          <Link to="/">Home</Link>
        </Content>
      </Wrapper>
    )
  }
}

export default MainPageHeader

const Wrapper = styled.div`
  background-color: #f5f5f5;
  display: flex;
  padding: 14px 0;
  align-content: center;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1600px;
  max-width: 98%;
  margin: 0 auto;

  @media (max-width: 1040px) {
    flex-direction: column;
    align-items: center;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.textDark};

  @media (max-width: 1040px) {
    margin-bottom: 0;
  }
`

const Image = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 500px) {
    display: none;
  }
`

const Text = styled.div`
  margin-left: 20px;
  font-family: 'Montserrat';
  font-weight: 900;
  white-space: nowrap;

  @media (max-width: 500px) {
    text-align: center;
    margin-left: 0;
  }
`

const Name = styled.div`
  font-size: 42px;
`
