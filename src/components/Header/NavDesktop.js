import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { navLinks } from './navLinks'
import { colors } from 'Constants'

const NavDesktop = () => {
  return (
    <nav>
      {navLinks.map(nav => {
        return (
          <NavLink to={nav.url} key={nav.url} activeStyle={{ opacity: 1 }}>
            {nav.label}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default NavDesktop

const NavLink = styled(Link)`
  color: ${colors.textDark};
  font-size: 14px;
  font-weight: 700;
  opacity: 0.4;
  padding: 10px 20px;
  transition: opacity 150ms;

  :hover {
    opacity: 1;
    color: ${colors.textDark};
  }
`
