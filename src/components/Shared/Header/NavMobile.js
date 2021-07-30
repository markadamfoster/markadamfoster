import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { useSpring, animated } from 'react-spring'

import { MenuIcon } from './MenuIcon'
import { navLinks } from './navLinks'
import { colors } from 'Constants'

const NavMobile = () => {
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => setNavOpen(!navOpen)
  const props = useSpring({ opacity: navOpen ? 1 : 0 })

  return (
    <>
      <Button onClick={toggleNav}>
        <MenuIcon isOpen={navOpen} />
      </Button>

      {navOpen && (
        <Background style={props}>
          <Nav>
            {navLinks.map(nav => {
              return (
                <NavLink
                  to={nav.url}
                  key={nav.url}
                  activeStyle={{ opacity: 1 }}
                  onClick={() => toggleNav()} // this closes the menu if user clicks on the item for the current page
                >
                  {nav.label}
                </NavLink>
              )
            })}
          </Nav>
        </Background>
      )}
    </>
  )
}

export default NavMobile

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
  border: none;
  background: transparent;
  z-index: 100;
  transition: all 200ms;
  font-size: 10px;
`

const Background = styled(animated.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  padding-bottom: 20px;
  width: 100%;
  height: 100vh;
  right: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.99;
  background-color: ${colors.offWhiteBG};
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.04),
    inset 0 0 5px rgba(0, 0, 0, 0.01), inset 0 5px 22px -8px rgba(0, 0, 0, 0.05);
  z-index: 1000;
`

const Nav = styled.nav`
  margin-bottom: 100px;
`

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 15px 30px;
  margin: 20px 0;
  font-weight: 700;
  color: ${colors.textDark};
  opacity: 0.5;
  font-size: 16px;
  transition: opacity 250ms;

  :hover {
    color: ${colors.textDark};
    opacity: 1;
  }
`
