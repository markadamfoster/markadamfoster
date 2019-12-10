import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import { useWindowSize } from 'utils/useWindowSize'

// assets
import profilePic from 'assets/mark-foster.jpg'
import { colors } from 'Constants'

const TopNavBar = () => {
  const windowSize = useWindowSize()

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <Logo>
            <Image src={profilePic} />

            <Text>
              <Name>Mark Foster</Name>
            </Text>
          </Logo>
        </Link>

        {windowSize.width >= 740 ? <NavDesktop /> : <NavMobile />}
      </Content>
    </Wrapper>
  )
}

export default TopNavBar

const Wrapper = styled.div`
  background-color: #f5f5f5;
  display: flex;
  padding: 14px 5px;
  align-content: center;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);

  @media (max-width: 500px) {
    padding: 5px;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1600px;
  max-width: 98%;
  margin: 0 auto;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.textDark};

  @media (max-width: 1040px) {
    margin-bottom: 0;
  }
`

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 500px) {
    width: 60px;
    height: 60px;
  }
`

const Text = styled.div`
  margin-left: 20px;
  font-family: 'Montserrat';
  font-weight: 900;
  white-space: nowrap;

  @media (max-width: 500px) {
    text-align: center;
    margin-left: 12px;
  }
`

const Name = styled.div`
  font-size: 42px;

  @media (max-width: 500px) {
    font-size: 32px;
  }
`

const Nav = styled.nav``
