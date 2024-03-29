import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import Header from 'components/Shared/Header'
import Footer from 'components/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`

const Main = styled.main`
  flex: 1;
`
