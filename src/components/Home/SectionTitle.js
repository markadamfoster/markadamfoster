import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container } from 'components/Shared/Container'
import { colors } from 'Constants'

SectionTitle.propTypes = {
  children: PropTypes.node,
}

function SectionTitle({ children }) {
  return (
    <Wrapper>
      <Container>
        <h2>{children}</h2>
      </Container>
    </Wrapper>
  )
}

export default SectionTitle

const Wrapper = styled.div`
  text-align: left;
  margin: 0;
  padding: 24px 0;
  font-size: 2rem;
  background-color: ${colors.offWhiteBG};
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.04),
    inset 0 0 5px rgba(0, 0, 0, 0.01), inset 0 5px 22px -8px rgba(0, 0, 0, 0.05);

  @media (max-width: 540px) {
    font-size: 2.4rem;
    padding: 18px 0;
  }
`
