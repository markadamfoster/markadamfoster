import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { navLinks } from './navLinks'
import { colors } from 'src/Constants'

class NavLarge extends Component {
  render() {
    const activeStyle = {
      color: 'white',
      borderBottom: `4px solid ${colors.action}`,
      backgroundColor: colors.action,
    }

    return (
      <Wrapper>
        <NavLinks>
          {navLinks.map(nav => {
            return (
              <NavLink activeStyle={activeStyle} to={nav.url} key={nav.url}>
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
`

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 600px;
  max-width: 96%;
  margin: 0 auto;
  margin-bottom: -4px;
  padding: 0;
`

const NavLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  background-color: #fb364059;
  color: ${colors.textDark};
  font-size: 24px;
  padding: 10px 30px;
  margin: 0 2px;
  width: 300px;
  text-align: center;
  transition: background-color 250ms;

  :hover {
    background-color: ${colors.action};
    color: white;
  }

  @media (max-width: 600px) {
    width: auto;
    flex: 1;
    font-size: 18px;
    padding: 8px 3px;
  }
`
