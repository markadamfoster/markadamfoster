import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FeaturedProjectsList from './FeaturedProjects/FeaturedProjectsList'
import PostsList from 'src/components/Posts/PostsList'
import { colors } from 'src/Constants'

HomePageContent.propTypes = {
  posts: PropTypes.array,
}

function HomePageContent({ posts }) {
  return (
    <Wrapper>
      <SectionTitle>Featured Projects</SectionTitle>
      <FeaturedProjectsList />
      <SectionTitle marginTop={true}>Articles</SectionTitle>
      <PostsList posts={posts} />
    </Wrapper>
  )
}

export default HomePageContent

const Wrapper = styled.div`
  width: 700px;
  max-width: 95%;
  margin: 0 auto;
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
