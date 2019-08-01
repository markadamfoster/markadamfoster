import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import HeaderLarge from 'src/components/Headers/HeaderLarge'
import Footer from 'src/components/Footer'
import { colors } from 'src/Constants'

import '../styles/normalize.css'
import '../styles/style.css'

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <HeaderLarge />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    )
  }
}

export default MainLayout

const Wrapper = styled.div`
  border-top: 8px solid ${colors.action};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`

const Main = styled.main`
  flex: 1;
`
