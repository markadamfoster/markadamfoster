import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const Content = ({ children }) => (
  <Wrapper>
    <Inner>{children}</Inner>
  </Wrapper>
)

export default Content

Content.propTypes = {
  children: PropTypes.object,
}

const Wrapper = styled.div`
  width: 1000px;
  max-width: 90%;
  margin: 40px auto 0;
  padding: 40px 30px;
  border-top: 4px solid #dbe7ec;
  font-size: 17px;
  line-height: 1.4;

  @media (max-width: 400px) {
    font-size: 16px;
    padding: 10px 14px;
  }
`

const Inner = styled.div`
  width: 700px;
  max-width: 100%;
  margin: 0 auto;
`
