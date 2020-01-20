import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { navLinks } from './navLinks'
import { colors } from 'Constants'

const NavDesktop = () => {
  return (
    <Nav>
      {navLinks.map(nav => {
        return (
          <NavLink to={nav.url} key={nav.url}>
            {nav.label}
          </NavLink>
        )
      })}
    </Nav>
  )
}

export default NavDesktop

const Nav = styled.nav``

const NavLink = styled(Link)`
  font-weight: 400;
  color: ${colors.action};
  font-size: 18px;
  margin-right: 50px;
  transition: color 250ms;

  :hover {
    color: ${colors.actionHover};
  }

  @media (max-width: 960px) {
    font-size: 15px;
    margin-right: 20px;
  }
`
