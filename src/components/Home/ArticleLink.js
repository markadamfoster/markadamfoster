import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from 'Constants'

ArticleLink.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
}

export default function ArticleLink({ slug, title }) {
  return (
    <Wrapper>
      <Link to={slug}>{title}</Link>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  margin-bottom: 16px;

  a {
    color: ${colors.textDark};

    &:hover {
      color: ${colors.action};
    }
  }

  @media (max-width: 540px) {
    font-size: 1.6rem;
  }
`
