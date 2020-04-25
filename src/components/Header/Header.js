import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { colors } from 'Constants'
import { Container } from 'styles/Container'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import { useWindowSize } from 'utils/useWindowSize'

function Header() {
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
  background-color: ${colors.offWhiteBG};
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.04),
    inset 0 0 5px rgba(0, 0, 0, 0.01), inset 0 5px 22px -8px rgba(0, 0, 0, 0.05);
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
  font-size: 21px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.textDark};

  @media (max-width: 1040px) {
    margin-bottom: 0;
  }
`
