import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import HeaderCondensed from '../components/Headers/HeaderCondensed'
import Footer from 'src/components/Footer'
import { colors } from 'src/Constants'

import '../styles/normalize.css'
import '../styles/style.css'

class SubPageLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <HeaderCondensed />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    )
  }
}

export default SubPageLayout

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
