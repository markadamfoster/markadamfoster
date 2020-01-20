import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { useSpring, animated } from 'react-spring'

import MenuIcon from './MenuIcon'
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
        <Sidebar style={props}>
          <Nav>
            {navLinks.map(nav => {
              return (
                <NavLink to={nav.url} key={nav.url}>
                  {nav.label}
                </NavLink>
              )
            })}
          </Nav>
        </Sidebar>
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
  border: 2px solid ${colors.action};
  border-radius: 5px;
  background: white;
  z-index: 100;
  transition: all 200ms;
  font-size: 10px;
`

const Sidebar = styled(animated.div)`
  position: absolute;
  padding-top: 100px;
  padding-bottom: 20px;
  width: 200px;
  right: 0;
  top: 0;
  right: 0;
  background-color: ${colors.action};
  z-index: 1;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`

const Nav = styled.nav``

const NavLink = styled(Link)`
  display: block;
  text-align: center;
  line-height: 44px;
  height: 44px;
  font-weight: 700;
  color: white;
  opacity: 0.8;
  font-size: 18px;
  transition: opacity 250ms;

  :hover {
    color: white;
    opacity: 1;
  }
`

const Icon = styled.img``
