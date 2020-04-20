import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from 'Constants'
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

      <SectionTitle>
        <Container>Recent Articles</Container>
      </SectionTitle>
      <Container>
        <RecentArticles articles={articles} />
      </Container>

      <SectionTitle>
        <Container>Recent Projects</Container>
      </SectionTitle>
      <Container>
        <PortfolioSection />
      </Container>
    </PageContent>
  )
}

export default HomePageContent

const PageContent = styled.div``

const SectionTitle = styled.h2`
  text-align: left;
  margin: 0;
  padding: 2vw 0;
  font-size: 3rem;
  background-color: ${colors.offWhiteBG};
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.04),
    inset 0 0 5px rgba(0, 0, 0, 0.01), inset 0 5px 22px -8px rgba(0, 0, 0, 0.05);

  @media (max-width: 530px) {
    font-size: 32px;
  }
`
