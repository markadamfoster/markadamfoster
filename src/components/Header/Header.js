import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Container } from 'styles/Container'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import { useWindowSize } from 'utils/useWindowSize'

import { colors } from 'Constants'

const Header = () => {
  const windowSize = useWindowSize()

  return (
    <Wrapper>
      <Container>
        <Content>
          <Link to="/">
            <Logo>Mark Foster</Logo>
          </Link>

          {windowSize.width >= 540 ? <NavDesktop /> : <NavMobile />}
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  z-index: 100;

  @media (max-width: 500px) {
    padding: 5px;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  font-size: 21px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.textDark};

  @media (max-width: 1040px) {
    margin-bottom: 0;
  }
`
