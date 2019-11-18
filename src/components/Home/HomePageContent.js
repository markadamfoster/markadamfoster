import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Hero from './Hero'
import FeaturedProjectsList from './FeaturedProjects/FeaturedProjectsList'
import PostsList from 'src/components/Posts/PostsList'
import { colors } from 'src/Constants'

HomePageContent.propTypes = {
  posts: PropTypes.array,
}

function HomePageContent({ posts }) {
  return (
    <>
      <Hero />
      <PageContent>
        <SectionTitle marginTop={true}>Latest Articles</SectionTitle>
        <PostsList posts={posts} />
        <SectionTitle>Featured Projects</SectionTitle>
        <FeaturedProjectsList />
      </PageContent>
    </>
  )
}

export default HomePageContent

const PageContent = styled.div`
  width: 700px;
  max-width: 95%;
  margin: 120px auto;

  @media (max-width: 1200px) {
    margin-top: 80px;
  }

  @media (max-width: 830px) {
    /* margin-top: 80px; */
    margin-top: 30px;
  }
`

const SectionTitle = styled.h2`
  margin: 0;
  margin-top: ${props => (props.marginTop ? '50px' : '0')};
  display: inline-block;
  font-size: 42px;
  line-height: 20px;
  border-bottom: 8px solid ${colors.action};

  @media (max-width: 830px) {
    font-size: 32px;
    line-height: 14px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 10px;
    border-bottom: 6px solid ${colors.action};
  }
`
