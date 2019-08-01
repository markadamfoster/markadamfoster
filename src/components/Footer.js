import React, { Component } from 'react'
import styled from 'styled-components'

class Footer extends Component {
  static propTypes = {}

  render() {
    return <Wrapper>© {new Date().getFullYear()} Mark Foster</Wrapper>
  }
}

export default Footer

const Wrapper = styled.footer`
  height: 80px;
  border-top: 2px solid #dbe7ec;
  display: flex;
  justify-content: center;
  align-items: center;
`
