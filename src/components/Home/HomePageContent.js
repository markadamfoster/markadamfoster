import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Articles from './Articles'
import { colors } from 'Constants'
import { Container } from 'styles/Container'
import Bio from './Bio'

HomePageContent.propTypes = {
  articles: PropTypes.array,
}

function HomePageContent({ articles }) {
  return (
    <>
      <Bio />

      <SectionTitle>
        <Container>Articles</Container>
      </SectionTitle>
      <Container>
        <Articles articles={articles} />
      </Container>
    </>
  )
}

export default HomePageContent

const SectionTitle = styled.h2`
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
