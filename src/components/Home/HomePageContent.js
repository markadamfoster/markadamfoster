import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Hero from './Hero'
import PortfolioSection from './Portfolio/PortfolioSection'
import RecentArticles from './RecentArticles'

HomePageContent.propTypes = {
  articles: PropTypes.array,
}

function HomePageContent({ articles }) {
  return (
    <PageContent>
      <Hero />

      <SectionTitle>Recent Projects</SectionTitle>
      <PortfolioSection />

      <SectionTitle>Recent Articles</SectionTitle>
      <RecentArticles articles={articles} />
    </PageContent>
  )
}

export default HomePageContent

const PageContent = styled.div`
  margin: 0 auto;
  width: 800px;
  max-width: 94%;
`

const SectionTitle = styled.h2`
  font-size: 42px;

  @media (max-width: 530px) {
    font-size: 42px;
  }

  @media (max-width: 460px) {
    margin-top: 30px;
    margin-bottom: 0px;
  }
`
