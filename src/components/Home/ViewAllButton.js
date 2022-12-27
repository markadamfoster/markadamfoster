import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Link from 'gatsby-link'
import { ArrowRight } from 'react-feather'

import { colors } from 'Constants'

ViewAllButton.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
}

export default function ViewAllButton({ to, children }) {
  return (
    <Wrapper>
      <StyledLink to={to}>
        {children}
        <IconWrapper>
          <ArrowRight size={18} />
        </IconWrapper>
      </StyledLink>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  font-weight: 400;
  text-align: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: ${colors.action};
  background-color: transparent;
  box-shadow: inset 0 0 0 2px ${colors.action};
  transition: background 200ms, box-shadow 200ms, color 200ms;

  &:hover {
    color: white;
    background: ${colors.actionHover};
    box-shadow: inset 0 0 0 2px ${colors.actionHover};
  }
`

const IconWrapper = styled.div`
  margin-left: 5px;
`
