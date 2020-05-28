import React from 'react'
import PropTypes from 'prop-types'

import Articles from './Articles'
import SectionTitle from './SectionTitle'
import { Container } from 'styles/Container'
import Bio from './Bio'
import Videos from './Videos'

HomePageContent.propTypes = {
  articles: PropTypes.array,
}

function HomePageContent({ articles }) {
  return (
    <>
      <Bio />

      <SectionTitle>Videos</SectionTitle>
      <Container>
        <Videos />
      </Container>

      <SectionTitle>Articles</SectionTitle>
      <Container>
        <Articles articles={articles} />
      </Container>
    </>
  )
}

export default HomePageContent
