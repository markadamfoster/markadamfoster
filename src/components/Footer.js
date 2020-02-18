import React from 'react'
import styled from 'styled-components'

import { colors } from 'Constants'
import { headlineFont } from 'styles/Fonts'

function Footer() {
  return <Wrapper>© {new Date().getFullYear()} Mark Foster</Wrapper>
}

export default Footer

const Wrapper = styled.footer`
  ${headlineFont};
  color: ${colors.textMedium};
  font-weight: 700;
  font-size: 13px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.offWhiteBG};
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.04),
    inset 0 0 5px rgba(0, 0, 0, 0.01), inset 0 5px 22px -8px rgba(0, 0, 0, 0.05);
`
