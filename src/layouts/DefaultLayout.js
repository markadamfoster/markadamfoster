import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import TopNavBar from '../components/Nav/TopNavBar'
import Footer from 'src/components/Footer'
import { colors } from 'src/Constants'

import '../styles/normalize.css'
import '../styles/style.css'

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <TopNavBar />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
}

export default DefaultLayout

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
