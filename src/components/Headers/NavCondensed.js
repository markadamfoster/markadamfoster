import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { navLinks } from './navLinks'
import { colors } from 'src/Constants'

class NavCondensed extends Component {
  render() {
    const activeStyle = {
      color: 'white',
      borderBottom: `4px solid ${colors.action}`,
      backgroundColor: colors.action,
    }

    return (
      <NavLinks>
        {navLinks.map(nav => {
          return (
            <NavLink activeStyle={activeStyle} to={nav.url} key={nav.url}>
              {nav.label}
            </NavLink>
          )
        })}
      </NavLinks>
    )
  }
}

export default NavCondensed

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: -4px;
  padding: 0;
  align-self: flex-end;

  @media (max-width: 1040px) {
    align-self: center;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

const NavLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  background-color: #fb364059;
  color: ${colors.textDark};
  font-size: 24px;
  padding: 10px 30px;
  margin: 0 2px;
  text-align: center;
  transition: background-color 250ms;

  :hover {
    background-color: ${colors.action};
    color: white;
  }

  @media (max-width: 600px) {
    width: 32%;
    flex: 1;
    font-size: 18px;
    padding: 16px 3px;
  }
`
