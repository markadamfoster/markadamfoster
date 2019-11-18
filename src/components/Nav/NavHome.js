import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { navLinks } from './navLinks'
import { colors } from 'src/Constants'

class NavLarge extends Component {
  render() {
    return (
      <Wrapper>
        <NavLinks>
          {navLinks.map(nav => {
            return (
              <NavLink to={nav.url} key={nav.url}>
                {nav.label}
              </NavLink>
            )
          })}
        </NavLinks>
      </Wrapper>
    )
  }
}

export default NavLarge

const Wrapper = styled.div`
  width: 100%;

  @media (max-width: 750px) {
    display: none;
  }
`

const NavLinks = styled.ul`
  margin: 30px auto 0;
  padding: 0;
`

const NavLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: ${colors.action};
  font-size: 19px;
  margin-right: 50px;
  transition: color 250ms;

  :hover {
    color: ${colors.actionHover};
  }

  @media (max-width: 920px) {
    font-size: 17px;
    margin-right: 30px;
  }

  @media (max-width: 600px) {
    width: auto;
    flex: 1;
    font-size: 18px;
    padding: 8px 3px;
  }
`
