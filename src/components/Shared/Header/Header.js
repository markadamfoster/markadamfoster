import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { colors } from 'Constants'
import { Container } from 'components/Shared/Container'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import { useWindowSize } from 'utils/useWindowSize'

function Header() {
  const windowSize = useWindowSize()
  const NAV_MENU_BREAKPOINT = 780 // when to switch to mobile nav menu

  return (
    <Wrapper>
      <Container>
        <Content>
          <Link to="/">
            <Logo>Mark Foster</Logo>
          </Link>

          {windowSize.width <= NAV_MENU_BREAKPOINT ? (
            <NavMobile />
          ) : (
            <NavDesktop />
          )}
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
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 1px;
  color: ${colors.textDark};

  @media (max-width: 1040px) {
    margin-bottom: 0;
  }
`
