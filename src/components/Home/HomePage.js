import React from 'react'
import PropTypes from 'prop-types'

import Articles from './Articles'
import Bio from './Bio'
import { Container } from 'styles/Container'
import DefaultLayout from 'layouts/DefaultLayout'
import SectionTitle from './SectionTitle'
import SEO from 'components/Shared/SEO'
import Videos from './Videos'

HomePage.propTypes = {
  articles: PropTypes.array,
}

export default function HomePage({ articles }) {
  return (
    <DefaultLayout>
      <SEO title="Home" />

      <Bio />

      <SectionTitle>Videos</SectionTitle>
      <Container>
        <Videos />
      </Container>

      <SectionTitle>Articles</SectionTitle>
      <Container>
        <Articles articles={articles} />
      </Container>
    </DefaultLayout>
  )
}
