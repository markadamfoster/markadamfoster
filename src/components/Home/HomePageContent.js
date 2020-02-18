import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from 'Constants'
import Bio from './Bio'
import { Container } from 'styles/Container'
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

      <Container>
        <Bio />
      </Container>

      <SectionTitle>Recent Projects</SectionTitle>
      <Container>
        <PortfolioSection />
      </Container>

      <SectionTitle>Recent Articles</SectionTitle>

      <Container>
        <RecentArticles articles={articles} />
      </Container>
    </PageContent>
  )
}

export default HomePageContent

const PageContent = styled.div``

const SectionTitle = styled.h2`
  text-align: center;
  padding: 4vw 0;
  font-size: 42px;
  background-color: ${colors.offWhiteBG};
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.04),
    inset 0 0 5px rgba(0, 0, 0, 0.01), inset 0 5px 22px -8px rgba(0, 0, 0, 0.05);

  @media (max-width: 530px) {
    font-size: 32px;
  }
`
