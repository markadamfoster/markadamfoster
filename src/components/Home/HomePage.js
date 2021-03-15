import React from 'react'
import PropTypes from 'prop-types'

// import Articles from './Articles'
import { Container } from 'styles/Container'
import SEO from 'components/Shared/SEO'
import Hero from './Hero'
import DefaultLayout from 'layouts/DefaultLayout'
import CheckmarksSection from './CheckmarksSection'
import Testamonial from './Testamonial'

HomePage.propTypes = {
  articles: PropTypes.array, // TODO: either use this or clean it up (including the pagequery)
}

export default function HomePage() {
  return (
    <DefaultLayout>
      <SEO title="Home" />

      <Container>
        <Hero />
        <CheckmarksSection />
        <Testamonial />
      </Container>
    </DefaultLayout>
  )
}
